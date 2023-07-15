import React from "react";

const TabButton = ({ activeTab, id, title, onClick }) => {
    return (
        <div className="tabbed-btn-container">
            <button
                onClick={onClick}
                className={`tabbed-btn ${activeTab === id ? "tabbed-btn--active" : ""}`}
            >
                {title}
            </button>
        </div>
    );
};

export default TabButton;
