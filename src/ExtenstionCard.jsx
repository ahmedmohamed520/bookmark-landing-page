import React from "react";

const ExtenstionCard = ({ image, alt, title, text }) => {
    return (
        <article className="card">
            <div className="card-image">
                <img src={image} alt={alt} loading="lazy" />
            </div>
            <h3 className="heading-tertiary">{title}</h3>
            <p className="lead">{text}</p>
            <div className="card-separator">
                <img src="images/bg-dots.svg" alt="dots background" loading="lazy" />
            </div>
            <button className="btn card-btn">Add & Install Extension</button>
        </article>
    );
};

export default ExtenstionCard;
