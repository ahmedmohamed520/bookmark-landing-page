import React from "react";

const TabButton = (activeTab, id, title) => {
    return (
        <div className="tabbed-btn-container">
            <button className={`tabbed-btn ${activeTab === id ? "tabbed-btn--active" : ""}`}>{title}</button>
        </div>
    );
};

export default TabButton;
