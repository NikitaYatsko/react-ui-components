import {useEffect} from 'react';
import './up-button-style.css';

const UpButton = ({isVisible, setIsVisible})=>{
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [setIsVisible]);

    function toTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <button onClick={toTop} className={isVisible ? 'up-button is-visible' : "up-button"}>
            {"^"}
        </button>
    );
}
export default UpButton;
