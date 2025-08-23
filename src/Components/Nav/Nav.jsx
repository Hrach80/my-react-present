import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { GiHeartOrgan, GiHeartArmor, GiHeartKey, GiPathDistance, GiMuscleUp, GiHealthPotion } from "react-icons/gi";
import "../Nav/Nav.css";

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation(); 

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="nav-box">
            <h2 className="nav-logo">VV</h2>
            {isMobile && (
                <button className="nav-menu-button" onClick={toggleMenu}>
                    {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
                </button>
            )}
            <div className={`nav-links-container ${isMobile && isMenuOpen ? 'nav-links-open' : ''}`}>
                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                    <GiHeartOrgan className="nav-icon" />
                    Սրտի կառուցվածքը և ֆունկցիան
                </Link>
                <Link className={`nav-link ${location.pathname === '/chambers-septa' ? 'active' : ''}`} to="/chambers-septa">
                    <GiHeartArmor className="nav-icon" />
                    Սրտի խոռոչները և միջնապատերը
                </Link>
                <Link className={`nav-link ${location.pathname === '/valves' ? 'active' : ''}`} to="/valves">
                    <GiHeartKey className="nav-icon" />
                    Սրտի փականները
                </Link>
                <Link className={`nav-link ${location.pathname === '/circulation' ? 'active' : ''}`} to="/circulation">
                    <GiPathDistance className="nav-icon" />
                    Արյան շրջանառությունը սրտում
                </Link>
                <Link className={`nav-link ${location.pathname === '/myocardium' ? 'active' : ''}`} to="/myocardium">
                    <GiMuscleUp className="nav-icon" />
                    Սրտամկան (միոկարդ)
                </Link>
                <Link className={`nav-link ${location.pathname === '/prevention' ? 'active' : ''}`} to="/prevention">
                    <GiHealthPotion className="nav-icon" />
                    Սիրտ-անոթային հիվանդությունների վերաբերյալ կանխարգելում
                </Link>
            </div>
        </div>
    );
};