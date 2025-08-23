import React, { useState } from 'react';
import { FaHeartbeat, FaLungs, FaSyringe, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';
import "../Pakan/Pakan.css";
import Footer from '../../Footer/Footer';

// Accordion item component
const PakanAccordionItem = ({ title, icon: Icon, content, isLeft }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="pakan-accordion__container">
            <button className="pakan-accordion__button" onClick={toggleAccordion}>
                <div className="pakan-accordion__title-wrapper">
                    <Icon className="pakan-accordion__icon" />
                    <h3 className="pakan-accordion__title">{title}</h3>
                </div>
                {isOpen ? <FaChevronUp className="pakan-accordion__toggle-icon" /> : <FaChevronDown className="pakan-accordion__toggle-icon" />}
            </button>
            <div className={`pakan-accordion__content ${isOpen ? 'pakan-accordion__content--open' : ''}`}>
                <p className="pakan-accordion__text">{content}</p>
            </div>
        </div>
    );
};

// Main Pakan page component
const Pakan = () => {
    const leftItems = [
        {
            title: 'Եռափեղկ փական',
            icon: FaHeartbeat,
            content: 'Եռափեղկ փականը գտնվում է աջ նախասրտի և աջ փորոքի միջև։ Այն կանխում է արյան հետհոսքը դեպի աջ նախասիրտ, երբ աջ փորոքը կծկվում է։',
        },
        {
            title: 'Թոքային զարկերակի փական',
            icon: FaLungs,
            content: 'Այս փականը գտնվում է աջ փորոքի և թոքային զարկերակի միջև։ Այն բացվում է թոքեր արյուն մղելու համար և փակվում է՝ կանխելով արյան հետհոսքը դեպի փորոք։',
        },
    ];

    const rightItems = [
        {
            title: 'Երկփեղկ փական',
            icon: FaHeartbeat,
            content: 'Երկփեղկ փականը գտնվում է ձախ նախասրտի և ձախ փորոքի միջև։ Այն թույլ է տալիս արյանը հոսել թոքերից դեպի ձախ փորոք, բայց կանխում է հետհոսքը։',
        },
        {
            title: 'Աորտալ փական',
            icon: FaSyringe,
            content: 'Աորտալ փականը գտնվում է ձախ փորոքի և աորտայի միջև։ Այն բացվում է թթվածնով հարուստ արյունը մարմին մղելու համար և փակվում է՝ կանխելով հետհոսքը դեպի ձախ փորոք։',
        },
    ];

    return (
        <div className="pakan-page__main-container">
        
            <div className="pakan-page__diagram-section">
                <div className="pakan-page__accordion-column">
                    {leftItems.map((item, index) => (
                        <PakanAccordionItem
                            key={`left-${index}`}
                            title={item.title}
                            icon={item.icon}
                            content={item.content}
                            isLeft={true}
                        />
                    ))}
                </div>

                <div className="pakan-page__image-wrapper">
                    <img
                        src="https://papik.pro/uploads/posts/2023-02/1675850294_papik-pro-p-klapani-serdtsa-risunok-12.jpg"
                        alt="Սրտի փականների դիագրամ"
                        className="pakan-page__diagram-image"
                    />
                </div>

                <div className="pakan-page__accordion-column">
                    {rightItems.map((item, index) => (
                        <PakanAccordionItem
                            key={`right-${index}`}
                            title={item.title}
                            icon={item.icon}
                            content={item.content}
                            isLeft={false}
                        />
                    ))}
                </div>
            </div>

            <div className="pakan-page__external-links">
                <h2 className="pakan-page__links-title">Լրացուցիչ տեղեկատվություն</h2>
                <ul className="pakan-page__links-list">
                    <li>
                        <a href="https://www.doctors.am/symptoms/sirt" target="_blank" rel="noopener noreferrer">
                            Սրտի կառուցվածք - Doctors.am <FaExternalLinkAlt />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.imdproc.am/p/kensabanvotyvon/8-dasaran/organizmi-nerqin-mijavayry-sirt-anvotayin-hamakarg-21163/aryan-avshashrjanarutyan-hamakarg-nra-dery-organizmum-21166/re-cbb73dfe-3597-4933-b822-76a2f020191d" target="_blank" rel="noopener noreferrer">
                            Սրտի անատոմիա - ԻմԴպրոց <FaExternalLinkAlt />
                        </a>
                    </li>
                </ul>
            </div>
            <Footer/>
        </div>
    );
};

export default Pakan;