import React, { useState } from 'react';
import { FaHeartbeat, FaMicroscope, FaStethoscope, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';
import "../Mkan/Mkan.css";
import Footer from '../../Footer/Footer'; 

const Mkan = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {
            title: 'Միոկարդի կառուցվածքը',
            icon: FaMicroscope,
            content: 'Միոկարդը սրտի պատի միջին, հաստ շերտն է, որը կազմված է մասնագիտացված մկանային բջիջներից՝ կարդիոմիոցիտներից։ Այս բջիջները անդադար կծկվում և թուլանում են՝ ապահովելով սրտի պոմպային ֆունկցիան։',
        },
        {
            title: 'Գործառույթը',
            icon: FaHeartbeat,
            content: 'Միոկարդի հիմնական գործառույթն է արյունը մղել դեպի մարմնի բոլոր օրգաններ և թոքեր։ Այն աշխատում է անկախ նյարդային համակարգից, չնայած նրա աշխատանքը կարգավորվում է նյարդային և էնդոկրին համակարգերի կողմից։',
        },
        {
            title: 'Արյունամատակարարումը',
            icon: FaStethoscope,
            content: 'Միոկարդը ինքնին արյուն է ստանում հատուկ զարկերակներից՝ պսակաձև կամ կորոնար զարկերակներից։ Դրանք շատ կարևոր են սրտի բնականոն աշխատանքի համար։',
        },
        {
            title: 'Հիվանդություններ',
            icon: FaStethoscope, 
            content: 'Սրտամկանի ամենատարածված հիվանդություններից են միոկարդիտը (բորբոքում), սրտամկանի ինֆարկտը (երբ արյունամատակարարումը խաթարվում է) և սրտամկանի հիպերտրոֆիան (հաստացում)։',
        },
    ];

    const leftItems = items.slice(0, 2);
    const rightItems = items.slice(2, 4);

    return (
        <div className="mkan-page__main-container">
            

            <div className="mkan-page__diagram-section">
                <div className="mkan-page__accordion-column">
                    {leftItems.map((item, index) => (
                        <div key={`left-${index}`} className="mkan-accordion__container">
                            <button className="mkan-accordion__button" onClick={() => toggleAccordion(index)}>
                                <div className="mkan-accordion__title-wrapper">
                                    <item.icon className="mkan-accordion__icon" />
                                    <h3 className="mkan-accordion__title">{item.title}</h3>
                                </div>
                                {openIndex === index ? <FaChevronUp className="mkan-accordion__toggle-icon" /> : <FaChevronDown className="mkan-accordion__toggle-icon" />}
                            </button>
                            <div className={`mkan-accordion__content ${openIndex === index ? 'mkan-accordion__content--open' : ''}`}>
                                <p className="mkan-accordion__text">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mkan-page__image-wrapper">
                    <img
                        src="https://s9.travelask.ru/system/images/files/001/021/685/wysiwyg/serdechnoy-myishtsyi.jpg"
                        alt="Սրտի կառուցվածքի դիագրամ"
                        className="mkan-page__diagram-image"
                    />
                </div>

                <div className="mkan-page__accordion-column">
                    {rightItems.map((item, index) => (
                        <div key={`right-${index}`} className="mkan-accordion__container">
                            <button className="mkan-accordion__button" onClick={() => toggleAccordion(index + 2)}>
                                <div className="mkan-accordion__title-wrapper">
                                    <item.icon className="mkan-accordion__icon" />
                                    <h3 className="mkan-accordion__title">{item.title}</h3>
                                </div>
                                {openIndex === index + 2 ? <FaChevronUp className="mkan-accordion__toggle-icon" /> : <FaChevronDown className="mkan-accordion__toggle-icon" />}
                            </button>
                            <div className={`mkan-accordion__content ${openIndex === index + 2 ? 'mkan-accordion__content--open' : ''}`}>
                                <p className="mkan-accordion__text">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mkan-page__external-links">
                <h2 className="mkan-page__links-title">Լրացուցիչ տեղեկատվություն</h2>
                <ul className="mkan-page__links-list">
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

export default Mkan;