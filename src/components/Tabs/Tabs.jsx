import React, {useState} from 'react';
import './tabs-style.css';

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {label: "Tab 1", content: "Content for Tab 1"},
        {label: "Tab 2", content: "Content for Tab 2"},
        {label: "Tab 3", content: "Content for Tab 3"},
        {label: "Tab 4", content: "Content for Tab 4"},
    ];

    function handleTabClick(index) {
        setActiveTab(index);
    }

    return (
        <div className="tabs">
            <div className="tabheader-items">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tabheader-item ${activeTab === index ? 'tabheader-item_active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className="tabcontent">
                {tabs[activeTab].content}
            </div>
        </div>
    );
}

