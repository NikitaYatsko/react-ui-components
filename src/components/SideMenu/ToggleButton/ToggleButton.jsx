import './close-button-style.css'

const ToggleButton = ({openMenu,sideMenuActive}) => {
    return (
        <button onClick={openMenu} className={sideMenuActive ? "side-button reversed": "side-button"}>
            {'<'}
        </button>
    );
}
export default ToggleButton;