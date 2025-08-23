import React, { useState, useEffect } from 'react';
import { FaHeartbeat, FaSearch, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';
import "./Hivand.css";

const hivandutyunner = [
    { name: 'Զարկերակային գերճնշում', wikipedia: 'https://hy.wikipedia.org/wiki/Զարկերակային_գերճնշում', youtubeId: 'UxGEgz1Wz5g' },
    { name: 'Սրտի իշեմիկ հիվանդություն', wikipedia: 'https://hy.wikipedia.org/wiki/Սրտի_իշեմիկ_հիվանդություն', youtubeId: '47mlhLFLcHI' },
    { name: 'Սրտային անբավարարություն', wikipedia: 'https://hy.wikipedia.org/wiki/Սրտային_անբավարարություն', youtubeId: 'qJlDfjWFslk' },
    { name: 'Առիթմիաներ', wikipedia: 'https://hy.wikipedia.org/wiki/Սրտի_ռիթմի_խանգարումներ', youtubeId: 'IlnGBxaQ7WI' },
    { name: 'Կարդիոմիոպաթիաներ', wikipedia: 'https://hy.wikipedia.org/wiki/Կարդիոմիոպաթիա', youtubeId: 'ctlraDcbugw' },
    { name: 'Սրտի փականների հիվանդություններ', wikipedia: 'https://hy.wikipedia.org/wiki/Սրտի_ձեռքբերովի_արատներ', youtubeId: '4h0ZBF2Gpec' },
    { name: 'Միոկարդիտ', wikipedia: 'https://hy.wikipedia.org/wiki/Միոկարդիտ', youtubeId: 'n4w6mOOMHw0' },
    { name: 'Էնդոկարդիտ', wikipedia: 'https://hy.wikipedia.org/wiki/Էնդոկարդիտ', youtubeId: 'n4w6mOOMHw0' },
    { name: 'Պերիկարդիտ', wikipedia: 'https://hy.wikipedia.org/wiki/Պերիկարդիտ', youtubeId: 'NWILS2pDHas' },
    { name: 'Աթերոսկլերոզ', wikipedia: 'https://hy.wikipedia.org/wiki/Աթերոսկլերոզ', youtubeId: 'T6G6MBIHLqw' }
];

const Hivand = () => {
    const [visibleButtons, setVisibleButtons] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        let timeoutIds = [];
        hivandutyunner.forEach((item, index) => {
            const timeoutId = setTimeout(() => {
                setVisibleButtons(prev => [...prev, item]);
            }, index * 100); 

            timeoutIds.push(timeoutId);
        });

        return () => timeoutIds.forEach(id => clearTimeout(id));
    }, []);

    const handleButtonClick = (item) => {
        setSelectedVideo(item.youtubeId);
    };

    return (
        <div className="hivand-page__main-container">
            

            <div className="hivand-page__content-section">
                <div className="hivand-page__buttons-container">
                    {visibleButtons.map((item, index) => (
                        <button
                            key={index}
                            className="hivand-page__button"
                            onClick={() => handleButtonClick(item)}
                        >
                            <FaHeartbeat className="button-icon" />
                            {item.name}
                        </button>
                    ))}
                </div>

                <div className="hivand-page__video-container">
                    {selectedVideo ? (
                        <iframe
                            className="hivand-page__video"
                            src={`https://www.youtube.com/embed/${selectedVideo}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <div className="hivand-page__placeholder">
                            <FaYoutube className="placeholder-icon" />
                            <p>Ընտրեք հիվանդություն՝ տեսանյութը դիտելու համար</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="hivand-page__external-links">
                {selectedVideo && (
                    <a
                        href={hivandutyunner.find(item => item.youtubeId === selectedVideo).wikipedia}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hivand-page__wikipedia-link"
                    >
                        Ավելին հիվանդության մասին <FaExternalLinkAlt />
                    </a>
                )}
            </div>
        </div>
    );
}

export default Hivand;