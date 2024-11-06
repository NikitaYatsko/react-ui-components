import './form-component_style.css'
import {useState} from "react";

export default function FormComponent() {

    const [form, setForm] = useState({
        email: '',
        password: '',
        emailDirty: false,
        passwordDirty: false,
        emailError: 'Поле почты не может быть пустым',
        passwordError: 'Поле пароля не может быть пустым'
    });

    const blurHandler = (e) => {
        const field = `${e.target.name}Dirty`;
        setForm({...form, [field]: true});
    };

    const emailHandler = (e) => {
        const value = e.target.value;
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
        setForm({
            ...form,
            email: value,
            emailError: emailRegex.test(value) ? '' : 'Некорректный Емейл'
        });
    };

    const passwordHandler = (e) => {
        const value = e.target.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/;
        setForm({
            ...form,
            password: value,
            passwordError: passwordRegex.test(value)
                ? ''
                : 'Пароль должен иметь хотя-бы 1 большую букву, специальный символ и цифру'
        });
    };

    const isFormValid = !form.emailError && !form.passwordError && form.email && form.password;

    return (
        <form>
            <h1>Зарегистрироваться</h1>
            <div className='wrapper'>

                <input
                    onChange={emailHandler}
                    value={form.email}
                    onBlur={blurHandler}
                    type='text'
                    name='email'
                    placeholder='Введите ваш E-Mail'
                    className='e-input'
                />
                {(form.emailDirty && form.emailError) && <div className='error'>{form.emailError}</div>}

                <input
                    onChange={passwordHandler}
                    value={form.password}
                    onBlur={blurHandler}
                    type="password"
                    name='password'
                    placeholder='Введите пароль'
                    className='pass-input'
                />
                {(form.passwordDirty && form.passwordError) && <div className='error'>{form.passwordError}</div>}
            </div>
            <button type='submit' className={`reg-button ${!isFormValid ? 'disabled' : ''}`}
                    disabled={!isFormValid}>Зарегистрироваться
            </button>
        </form>
    );
}
