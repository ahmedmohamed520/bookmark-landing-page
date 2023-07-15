import React, { useState } from "react";
import { links, socials } from "./data";
import Menu from "./Menu";

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
                    <li key={id} className="nav-item">
                        <a href={url} className="nav-link">
                            {text}
                        </a>
                    </li>
                ))}
                <li>
                    <button className="btn btn--red">LOGIN</button>
                </li>
            </ul>

            {/* Mobile menu starts */}
            <Menu isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu} />
            {/* Mobile menu ends */}

            <button onClick={openMobileMenu} className="menu-toggler">
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
