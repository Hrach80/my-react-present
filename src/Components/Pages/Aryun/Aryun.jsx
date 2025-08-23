import React, { useState } from 'react';
import { FaHeartbeat, FaLungs, FaSyringe, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';
import "../Aryun/Aryun.css";
import Footer from '../../Footer/Footer';

// Accordion item component
const AryunAccordionItem = ({ title, icon: Icon, content, isLeft }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="aryun-accordion__container">
            <button className="aryun-accordion__button" onClick={toggleAccordion}>
                <div className="aryun-accordion__title-wrapper">
                    <Icon className="aryun-accordion__icon" />
                    <h3 className="aryun-accordion__title">{title}</h3>
                </div>
                {isOpen ? <FaChevronUp className="aryun-accordion__toggle-icon" /> : <FaChevronDown className="aryun-accordion__toggle-icon" />}
            </button>
            <div className={`aryun-accordion__content ${isOpen ? 'aryun-accordion__content--open' : ''}`}>
                <p className="aryun-accordion__text">{content}</p>
            </div>
        </div>
    );
};

// Main Aryun page component
const Aryun = () => {
    const leftItems = [
        {
            title: 'Մարմնից դեպի սիրտ',
            icon: FaHeartbeat,
            content: 'Թթվածնով աղքատ արյունը սիներակներով մուտք է գործում աջ նախասիրտ։',
        },
        {
            title: 'Դեպի թոքեր',
            icon: FaLungs,
            content: 'Աջ նախասրտից արյունը անցնում է աջ փորոք, որտեղից այն մղվում է թոքային զարկերակով դեպի թոքեր՝ թթվածնով հարստանալու համար։',
        },
    ];

    const rightItems = [
        {
            title: 'Թոքերից դեպի սիրտ',
            icon: FaHeartbeat,
            content: 'Թոքերից թթվածնով հարուստ արյունը թոքային երակներով վերադառնում է ձախ նախասիրտ։',
        },
        {
            title: 'Դեպի մարմին',
            icon: FaSyringe,
            content: 'Ձախ նախասրտից արյունը անցնում է ձախ փորոք, որտեղից այն մղվում է աորտա և այնուհետև՝ ամբողջ մարմին։',
        },
    ];

    return (
        <div className="aryun-page__main-container">
            

            <div className="aryun-page__diagram-section">
                <div className="aryun-page__accordion-column">
                    {leftItems.map((item, index) => (
                        <AryunAccordionItem
                            key={`left-${index}`}
                            title={item.title}
                            icon={item.icon}
                            content={item.content}
                            isLeft={true}
                        />
                    ))}
                </div>

                <div className="aryun-page__image-wrapper">
                    <img
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/935fce46432539.5607d2c3a0618.jpg"
                        alt="Արյան շրջանառության դիագրամ"
                        className="aryun-page__diagram-image"
                    />
                </div>

                <div className="aryun-page__accordion-column">
                    {rightItems.map((item, index) => (
                        <AryunAccordionItem
                            key={`right-${index}`}
                            title={item.title}
                            icon={item.icon}
                            content={item.content}
                            isLeft={false}
                        />
                    ))}
                </div>
            </div>

            <div className="aryun-page__external-links">
                <h2 className="aryun-page__links-title">Լրացուցիչ տեղեկատվություն</h2>
                <ul className="aryun-page__links-list">
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

export default Aryun;