import React from "react";

const TabContent = ({ id, image, alt, title, desc, activeTab, setActiveTab }) => {
    return (
        <div className={`col-2 tab-content ${activeTab === id ? "active-tab" : ""}`}>
            <div className={`feature-image`}>
                <img src={image} alt={alt} loading="lazy" />
                <div className="header-pattern"></div>
            </div>
            <div className="feature-desc">
                <h2 className="heading-secondary">{title}</h2>
                <p className="lead">{desc}</p>
            </div>
        </div>
    );
};

export default TabContent;
