import './form-component_style.css'
import {useState} from "react";

export default function FormComponent() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Поле почты не может быть пустым');
    const [passwordError, setPasswordError] = useState('Поле пароля не может быть пустым')

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный Емейл')
        } else {
            setEmailError('')
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/
        if (!re.test(String(e.target.value))) {
            setPasswordError('Пароль должен иметь хотя-бы 1 большую букву,специальный символ и цифру');
        } else {
            setPasswordError('');
        }
    }


    return (
        <form>
            <h1>Зарегистрироваться</h1>
            <div className='wrapper'>

                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type='text'
                       name='email'
                       placeholder='Введите ваш E-Mail'
                       className='e-input'/>
                {(emailDirty && emailError) && <div className='error'>{emailError}</div>}

                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type="password"
                       name='password'
                       placeholder='Введите пароль'
                       className='pass-input'/>
                {(passwordDirty && passwordError) && <div className='error'>{passwordError}</div>}
            </div>
            <button type='submit' className='reg-button'>Зарегистрироваться</button>
        </form>
    )

}