import './form-component_style.css'

export default function FormComponent() {
    return (
        <form>
            <h1>Зарегистрироваться</h1>
            <div className='wrapper'>
                <input type='text' name='email' placeholder='Введите ваш E-Mail' className='e-input'/>
                <input type="password" name='password' placeholder='Введите пароль' className='pass-input'/>
            </div>
            <button type='submit' className='reg-button'>Зарегистрироваться</button>
        </form>
    )

}