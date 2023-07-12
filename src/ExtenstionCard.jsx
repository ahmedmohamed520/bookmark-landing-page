import React from "react";

const ExtenstionCard = ({ image, alt, title, text }) => {
    return (
        <article className="card">
            <div className="card-image">
                <img src={image} alt={alt} loading="lazy" />
            </div>
            <h3 className="heading-tertiary">{title}</h3>
            <p className="leading">{text}</p>
            <div className="card-separator"></div>
            <button className="btn">Add & Install Extension</button>
        </article>
    );
};

export default ExtenstionCard;
