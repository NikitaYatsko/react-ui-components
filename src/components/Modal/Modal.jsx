import './modal-style.css'

function Modal({active, setActive}) {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-content active' : 'modal-content'} onClick={(e) => e.stopPropagation()}>
                <h2>Модальное окно</h2>
                <p>Это пример содержимого модального окна.</p>
                <button onClick={() => setActive(false)}>Закрыть</button>
            </div>
        </div>
    );
}

export default Modal;