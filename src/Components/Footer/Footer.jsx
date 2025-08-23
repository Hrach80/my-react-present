import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer__main-container">
            <div className="footer__content">
                <div className="footer__section footer__about">
                    <h2 className="footer__title">Մեր մասին</h2>
                    <p className="footer__text">
                        Մենք նվիրված ենք սրտի անատոմիայի և հիվանդությունների մասին որակյալ տեղեկատվություն տրամադրելուն:
                    </p>
                </div>

                <div className="footer__section footer__social">
                    <h2 className="footer__title">Հետևեք մեզ</h2>
                    <div className="footer__social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF className="social-icon facebook" />
                        </a>

                        <a href="https://www.instagram.com/varuj.vagarshakyan?igsh=MWs5dW1kbGtndHd4Mg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="social-icon instagram" />
                        </a>

                        <a href="mailto:vagarshakyanvaruj@gmail.com" aria-label="Email">
                            <FaEnvelope className="social-icon email" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer__signature">
                <p>
                    Ստեղծված է <FaHeart className="signature-icon" /> սիրով <a href="tel:+37493395221" target="_blank" rel="noopener noreferrer">Վաղարշակյան Վարուժան</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;