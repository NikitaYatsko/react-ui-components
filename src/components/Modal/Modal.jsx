import './modal-style.css'

const Modal = ({active, setActive, children}) => {
    active ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-content active' : 'modal-content'} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
export default Modal;
