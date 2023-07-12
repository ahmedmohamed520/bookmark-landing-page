import React from "react";

const TabContent = ({ id, image, alt, title, desc, activeTab }) => {
    return (
        <div className="col-2">
            <div className={`feature-image ${activeTab === id ? "active-tab" : ""}`}>
                <img src={image} alt={alt} loading="lazy" />
            </div>
            <div className="feature-desc">
                <h2 className="heading-secondary">{title}</h2>
                <p className="leading">{desc}</p>
            </div>
        </div>
    );
};

export default TabContent;
