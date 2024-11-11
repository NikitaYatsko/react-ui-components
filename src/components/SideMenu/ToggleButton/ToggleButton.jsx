import './close-button-style.css'

const ToggleButton = ({openMenu}) => {
    return (
        <button onClick={openMenu} className="side-button">
            {'<'}
        </button>
    );
}
export default ToggleButton;