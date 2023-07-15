import React from "react";
import { links, socials } from "./data";
import Logo from "./logo";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <Logo />
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
                    return (
                        <li key={link.id}>
                            <a href={link.url} className="social-link">
                                <img src={link.icon} alt={link.alt} loading="lazy" />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
};

export default Footer;
