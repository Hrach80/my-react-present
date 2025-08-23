import React, { useState } from 'react';
import { FaHeartbeat, FaLungs, FaSyringe, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';
import "../XorochPages/Xoroch.css";
import Footer from '../../Footer/Footer';

// Accordion item component
const XorochAccordionItem = ({ title, icon: Icon, content, isLeft }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="xoroch-accordion__container">
            <button className="xoroch-accordion__button" onClick={toggleAccordion}>
                <div className="xoroch-accordion__title-wrapper">
                    <Icon className="xoroch-accordion__icon" />
                    <h3 className="xoroch-accordion__title">{title}</h3>
                </div>
                {isOpen ? <FaChevronUp className="xoroch-accordion__toggle-icon" /> : <FaChevronDown className="xoroch-accordion__toggle-icon" />}
            </button>
            <div className={`xoroch-accordion__content ${isOpen ? 'xoroch-accordion__content--open' : ''}`}>
                <p className="xoroch-accordion__text">{content}</p>
            </div>
        </div>
    );
};

// Main Xoroch page component
const Xoroch = () => {
    const leftItems = [
        {
            title: 'Աջ նախասիրտ',
            icon: FaHeartbeat,
            content: 'Աջ նախասիրտը սրտի վերին աջ խոռոչն է։ Այն ստանում է թթվածնով աղքատ արյունը մարմնի վերին և ստորին մասերից։',
        },
        {
            title: 'Աջ փորոք',
            icon: FaLungs,
            content: 'Աջ փորոքը սրտի ստորին աջ խոռոչն է։ Այն մղում է թթվածնով աղքատ արյունը դեպի թոքեր։',
        },
        {
            title: 'Միջնապատեր',
            icon: FaSyringe,
            content: 'Միջնապատերը մկանային պատեր են, որոնք բաժանում են սրտի խոռոչները՝ կանխելով թթվածնով հարուստ և աղքատ արյան խառնվելը։',
        },
    ];

    const rightItems = [
        {
            title: 'Ձախ նախասիրտ',
            icon: FaHeartbeat,
            content: 'Ձախ նախասիրտը սրտի վերին ձախ խոռոչն է։ Այն ստանում է թթվածնով հարուստ արյունը թոքային երակներից և այն փոխանցում ձախ փորոքին։',
        },
        {
            title: 'Ձախ փորոք',
            icon: FaLungs,
            content: 'Ձախ փորոքը սրտի ամենամեծ և ամենաուժեղ խոռոչն է։ Այն մղում է թթվածնով հարուստ արյունը դեպի մարմնի բոլոր օրգաններ։',
        },
        {
            title: 'Թոքային զարկերակ',
            icon: FaSyringe,
            content: 'Թոքային զարկերակը տեղափոխում է թթվածնով աղքատ արյունը աջ փորոքից դեպի թոքեր։',
        },
    ];

    return (
        <div className="xoroch-page__main-container">
        

            <div className="xoroch-page__diagram-section">
                <div className="xoroch-page__accordion-column">
                    {leftItems.map((item, index) => (
                        <XorochAccordionItem
                            key={`left-${index}`}
                            title={item.title}
                            icon={item.icon}
                            content={item.content}
                            isLeft={true}
                        />
                    ))}
                </div>

                <div className="xoroch-page__image-wrapper">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Heart_anatomy_in_armenian..jpg"
                        alt="Սրտի խոռոչների և միջնապատերի դիագրամ"
                        className="xoroch-page__diagram-image"
                    />
                </div>

                <div className="xoroch-page__accordion-column">
                    {rightItems.map((item, index) => (
                        <XorochAccordionItem
                            key={`right-${index}`}
                            title={item.title}
                            icon={item.icon}
                            content={item.content}
                            isLeft={false}
                        />
                    ))}
                </div>
            </div>

            <div className="xoroch-page__external-links">
                <h2 className="xoroch-page__links-title">Լրացուցիչ տեղեկատվություն</h2>
                <ul className="xoroch-page__links-list">
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

export default Xoroch;