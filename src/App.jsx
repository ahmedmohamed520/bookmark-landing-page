import React from "react";

const App = () => {
    return (
        <div>
            <header className="header">
                <nav className="nav">
                    <div className="logo">
                        <img src="images/logo-bookmark.svg" alt="logo" className="" />
                    </div>
                    <button className="nav-toggler">
                        <img
                            src="images/icon-hamburger.svg"
                            alt="Horizontal three lines mobile menu opener"
                            className="show"
                        />
                        <img
                            src="images/icon-close.svg"
                            alt="cross icon to close the name menu"
                            className=""
                        />
                    </button>
                </nav>
                <div className="header-content">
                    <div className="header-image">
                        <img
                            src="images/illustration-hero.svg"
                            alt="a screen with some content to illustrate how the extention works"
                        />
                    </div>
                    <div className="header-info">
                        <h1 className="heading-primary">A Simple Bookmark Manager</h1>
                        <p className="lead">
                            A clean and simple interface to organize your favourite websites. Open a new
                            browser tab and see your sites load instantly. Try it for free.
                        </p>
                        <div className="header-actions">
                            <button className="btn">Get it on chrome</button>
                            <button className="btn btn--white">Get it on Firefox</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default App;
