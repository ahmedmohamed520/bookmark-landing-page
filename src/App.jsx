import React, { useRef, useState } from "react";
import { accordion, cards, links, socials, tabs, tabsContent } from "./data";
import { validateEmail } from "./utils";
import Navbar from "./Navbar";
import TabContent from "./TabContent";
import TabButton from "./TabButton";
import Footer from "./Footer";
import Accordion from "./Accordion";
import ExtenstionCard from "./ExtenstionCard";

const App = () => {
    const emailRef = useRef(null);
    const [activeAccordion, setActiveAccordion] = useState(1);
    const [activeTab, setActiveTab] = useState(1);
    let isEmailValid = true;

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const emailValue = emailRef.current.value;
        isEmailValid = validateEmail(emailValue);
    };
    return (
        <div>
            {/* Header Start */}
            <header className="header">
                <Navbar />
                <div className="col-2">
                    <div className="header-image">
                        <img
                            src="images/illustration-hero.svg"
                            alt="a screen with some content to illustrate how the extention works"
                            loading="lazy"
                        />
                        <div className="header-pattern"></div>
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
            {/* Header Ends */}

            <main>
                {/* Features Section Starts */}
                <section className="features-section">
                    <div className="section-intro">
                        <h2 className="heading-secondary">Features</h2>
                        <p className="lead">
                            Our aim is to make it quick and easy for you to access you favourite websites.
                            Your bookmarks sync between your devices so you can access them on the go.
                        </p>
                    </div>
                    <div className="tabbed">
                        <div className="tabbed-btns">
                            {tabs.map((tab) => (
                                <TabButton
                                    onClick={() => setActiveTab(tab.id)}
                                    key={tab.id}
                                    {...tab}
                                    activeTab={activeTab}
                                />
                            ))}
                        </div>
                        <div className="tabbed-content">
                            {tabsContent.map((item) => (
                                <TabContent
                                    key={item.id}
                                    {...item}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                {/* Features Section Ends */}
                {/* Download Section Starts */}
                <section className="download-section">
                    <div className="section-intro">
                        <h2 className="heading-secondary">Download the extention</h2>
                        <p className="lead">
                            We've got more browsers in the pipeline. Please do let us know if you've got a
                            favourite you'd like us to prioritize.
                        </p>
                    </div>
                    <div className="download-cards">
                        {cards && cards.map((card) => <ExtenstionCard key={card.id} {...card} />)}
                    </div>
                </section>
                {/* Download Section Ends */}
                {/* FAQ Section Starts */}
                <section className="faq-section">
                    <div className="section-intro">
                        <h2 className="heading-secondary">Frequently Asked Questions</h2>
                        <p className="lead">
                            Here are some of our FAQs. If you have any other questions you'd like answered
                            please feel free to email us.
                        </p>
                    </div>
                    {/* Accordion */}
                    <Accordion activeAccordion={activeAccordion} setActiveAccordion={setActiveAccordion} />
                    <div className="accordion-center">
                        <button className="btn ">More Info</button>
                    </div>
                </section>
                {/* FAQ Section Ends */}
                {/* Subsction Form Start */}
                <section className="section-subscription">
                    <div className="subscription-header">
                        <p>35,000 Already joined</p>
                        <h3>Stay up-to-date with what we're doing</h3>
                    </div>

                    <form onSubmit={formSubmitHandler} className="subscription-form">
                        <div className="form-control">
                            <input placeholder="Enter your email address" ref={emailRef} type="text" />
                            <p>Whoops, make sure it's an email</p>
                        </div>
                        <button className="btn btn--red">Contact Us</button>
                    </form>
                </section>
                {/* Subsction Form End */}
            </main>
            <Footer />
        </div>
    );
};

export default App;
