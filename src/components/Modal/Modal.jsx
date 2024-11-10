import './modal-style.css'

export default function Modal({active, setActive, children}) {
    if (active) {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = 'scroll';
    }
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-content active' : 'modal-content'} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
