import React from "react";
import { links, socials } from "./data";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo">
                <img src="images/logo-bookmark.svg" alt="Bookmark" loading="lazy" />
            </div>
            <ul className="footer-links">
                {links.map((link) => (
                    <li key={link.id}>
                        <a href={link.url} className="footer-link">
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="social-links">
                {socials.map((link) => {
                    <li key={link.id}>
                        <a href={link.url} className="soacial-link">
                            <img src={link.icon} alt={link.alt} loading="lazy" />
                        </a>
                    </li>;
                })}
            </ul>
        </footer>
    );
};

export default Footer;
