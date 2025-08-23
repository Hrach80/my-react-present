import React, { useState } from 'react';
import { FaHeartbeat, FaLungs, FaSyringe, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Footer from '../../Footer/Footer';
import "../KarucPages/KarucPages.css"

// Accordion item component
const AccordionItem = ({ title, icon: Icon, content, isLeft }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion-item__container ${isLeft ? 'accordion-item__container--left' : 'accordion-item__container--right'}`}>
            <button className="accordion-item__button" onClick={toggleAccordion}>
                <div className="accordion-item__title-wrapper">
                    <Icon className="accordion-item__icon" />
                    <h3 className="accordion-item__title">{title}</h3>
                </div>
                {isOpen ? <FaChevronUp className="accordion-item__toggle-icon" /> : <FaChevronDown className="accordion-item__toggle-icon" />}
            </button>
            <div className={`accordion-item__content ${isOpen ? 'accordion-item__content--open' : ''}`}>
                <p className="accordion-item__text">{content}</p>
            </div>
        </div>
    );
};

// Main page component
const CenteredImagePage = () => {
    const leftItems = [
        {
            title: 'Աորտա',
            icon: FaHeartbeat,
            content: 'Աորտան մարմնի ամենամեծ զարկերակն է, որը սկիզբ է առնում ձախ փորոքից և մարմնին մատակարարում է թթվածնով հարուստ արյուն։',
        },
        {
            title: 'Թոքային զարկերակ',
            icon: FaLungs,
            content: 'Թոքային զարկերակը տեղափոխում է թթվածնով աղքատ արյունը աջ փորոքից դեպի թոքեր՝ թթվածնով հարստանալու համար։',
        },
        {
            title: 'Ձախ նախասիրտ',
            icon: FaHeartbeat,
            content: 'Ձախ նախասիրտը ստանում է թթվածնով հարուստ արյունը թոքային երակներից և այն փոխանցում ձախ փորոքին։',
        },
    ];

    const rightItems = [
        {
            title: 'Ստորին սիներակ',
            icon: FaSyringe,
            content: 'Ստորին սիներակը հավաքում է թթվածնով աղքատ արյունը մարմնի ստորին հատվածից և այն փոխանցում աջ նախասրտին։',
        },
        {
            title: 'Ձախ փորոք',
            icon: FaHeartbeat,
            content: 'Ձախ փորոքը սրտի ամենաուժեղ խոռոչն է, որը թթվածնով հարուստ արյունը մղում է դեպի աորտա, այնուհետև՝ մարմնի բոլոր օրգաններ։',
        },
        {
            title: 'Աջ փորոք',
            icon: FaHeartbeat,
            content: 'Աջ փորոքը մղում է թթվածնով աղքատ արյունը թոքային զարկերակ՝ դեպի թոքեր։',
        },
    ];

    return (
        <div className="heart-pro-page__main-container">
        

            <div className="heart-pro-page__diagram-section">
                <div className="heart-pro-page__accordion-column">
                    {leftItems.map((item, index) => (
                        <AccordionItem
                            key={`left-${index}`}
                            title={item.title}
                            icon={item.icon}
                            content={item.content}
                            isLeft={true}
                        />
                    ))}
                </div>

                <div className="heart-pro-page__image-wrapper">
                    <img
                        src="https://edgarghumashyan.wordpress.com/wp-content/uploads/2024/04/img_1978-1.jpg"
                        alt="Սրտի կառուցվածքի դիագրամ"
                        className="heart-pro-page__diagram-image"
                    />
                </div>

                <div className="heart-pro-page__accordion-column">
                    {rightItems.map((item, index) => (
                        <AccordionItem
                            key={`right-${index}`}
                            title={item.title}
                            icon={item.icon}
                            content={item.content}
                            isLeft={false}
                        />
                    ))}
                </div>
            </div>

            <div className="heart-pro-page__external-links">
                <h2 className="heart-pro-page__links-title">Լրացուցիչ տեղեկատվություն</h2>
                <ul className="heart-pro-page__links-list">
                    <li>
                        <a href="https://www.doctors.am/symptoms/sirt" target="_blank" rel="noopener noreferrer">
                            Սրտի կառուցվածք - Doctors.am
                        </a>
                    </li>
                    <li>
                        <a href="https://www.imdproc.am/p/kensabanvotyvon/8-dasaran/organizmi-nerqin-mijavayry-sirt-anvotayin-hamakarg-21163/aryan-avshashrjanarutyan-hamakarg-nra-dery-organizmum-21166/re-cbb73dfe-3597-4933-b822-76a2f020191d" target="_blank" rel="noopener noreferrer">
                            Սրտի անատոմիա - ԻմԴպրոց
                        </a>
                    </li>
                </ul>
            </div>
            <Footer/>
        </div>
    );
};

export default CenteredImagePage;