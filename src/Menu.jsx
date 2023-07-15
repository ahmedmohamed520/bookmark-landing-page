import React, { useEffect } from "react";
import { links, socials } from "./data";
import Logo from "./logo";

const Menu = ({ isMobileMenuOpen, closeMobileMenu }) => {
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            document.body.style.overflowX = "hidden";
        }
    }, [isMobileMenuOpen]);

    return (
        <div className={`mobile-menu ${isMobileMenuOpen ? "show" : ""}`}>
            <div className="overlay"></div>
            <div className="mobile-menu-content">
                {/* Header */}
                <div className="mobile-menu-header">
                    <div className="menu-logo">
                        <Logo />
                    </div>
                    <button onClick={closeMobileMenu} className="menu-toggler">
                        <img
                            src="images/icon-close.svg"
                            alt="cross icon to close the name menu"
                            loading="lazy"
                        />
                    </button>
                </div>
                <ul className="mobile-menu-links">
                    {links.map(({ id, url, text }) => (
                        <li key={id} className="mobile-menu-item">
                            <a href={url} className="mobile-menu-link">
                                {text}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button className="btn menu-btn">LOGIN</button>
                    </li>
                </ul>
                <ul className="menu-socials">
                    {socials.map(({ id, url, icon, alt }) => (
                        <li key={id}>
                            <a href={url} className="menu-social-link">
                                <img src={icon} alt={alt} loading="lazy" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
