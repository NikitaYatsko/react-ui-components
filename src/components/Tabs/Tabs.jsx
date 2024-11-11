import React, {useState} from 'react';
import './tabs-style.css';

const Tabs = ({children}) => {
    const [activeTab, setActiveTab] = useState(0);

    function handleTabClick(index) {
        setActiveTab(index);
    }

    return (
        <div className="tabs">
            <div className="tabheader-items">
                {React.Children.map(children, (child, index) => (
                    <div
                        key={index}
                        className={`tabheader-item ${activeTab === index ? 'tabheader-item_active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {child.props.label}
                    </div>
                ))}
            </div>
            <div className="tabcontent">
                {children[activeTab]}
            </div>
        </div>
    );
}
export default Tabs;