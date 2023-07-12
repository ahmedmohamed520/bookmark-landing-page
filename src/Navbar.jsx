import React, { useState } from "react";
import { links, socials } from "./data";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openMobileMenu = () => {
        setIsMobileMenuOpen(true);
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    return (
        <nav className="nav">
            <div className="logo">
                <img src="images/logo-bookmark.svg" alt="logo" className="" loading="lazy" />
            </div>

            <ul className="nav-list">
                {links.map(({ id, url, text }) => (
                    <li key={id} className="mobile-menu-item">
                        <a href={url} className="mobile-menu-link">
                            {text}
                        </a>
                    </li>
                ))}
                <li>
                    <button className="btn btn--red">LOGIN</button>
                </li>
            </ul>

            {/* Mobile menu starts */}
            <div className={`mobile-menu ${isMobileMenuOpen ? "show" : ""}`}>
                <div className="overlay"></div>
                <div className="mobile-menu-content">
                    {/* Header */}
                    <div className="mobile-menu-header">
                        <div className="logo">
                            <img src="images/logo-bookmark.svg" alt="bookmark logo" loading="lazy" />
                        </div>
                        <button className="close-menu">
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
                            <button className="btn btn--red">LOGIN</button>
                        </li>
                    </ul>
                    <ul className="socials">
                        {socials.map(({ id, url, icon, alt }) => (
                            <li key={id}>
                                <a href={url} className="social-link">
                                    <img src={icon} alt={alt} loading="lazy" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Mobile menu ends */}

            <button className="nav-toggler">
                <img
                    src="images/icon-hamburger.svg"
                    alt="Horizontal three lines mobile menu opener"
                    loading="lazy"
                />
            </button>
        </nav>
    );
};

export default Navbar;
