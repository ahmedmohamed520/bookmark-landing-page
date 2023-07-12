import React from "react";
import { accordion } from "./data";

const Accordion = ({ activeAccordion, setActiveAccordion }) => {
    return (
        <ul className="accordion">
            {accordion.map(({ id, question, answer }) => (
                <li
                    onClick={() => {
                        setActiveAccordion(id);
                    }}
                    key={id}
                    className={`accordion-item ${activeAccordion === id ? "accordion-item-active" : ""}`}
                >
                    <article className="accordion-btn">
                        <span>{question}</span>
                        <button>
                            <img src="images/icon-arrow.svg" alt="down arrow" loading="lazy" />
                        </button>
                    </article>
                    <div className="accordion-answer">{answer}</div>
                </li>
            ))}
        </ul>
    );
};

export default Accordion;
