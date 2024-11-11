import {useState} from 'react';
import './slider-style.css';

const images = [
    'https://via.placeholder.com/600x400?text=Slide+1',
    'https://via.placeholder.com/600x400?text=Slide+2',
    'https://via.placeholder.com/600x400?text=Slide+3',
];

const Slider = () =>{
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slider">
            <button onClick={prevSlide} className="slider-button prev">
                {"<"}
            </button>
            <div
                className="slider-content"
                style={{transform: `translateX(-${currentIndex * 100}%)`}}
            >
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image} alt={`Slide ${index + 1}`}/>
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} className="slider-button next">
                {">"}
            </button>
        </div>
    );
};

export default Slider;


