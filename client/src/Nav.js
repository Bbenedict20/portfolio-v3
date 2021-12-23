import React, { useState, useEffect } from 'react'
import './styles/Nav.css';
import linkedin from './images/linkedin-icon.svg';
import git from './images/gitLogoW.svg';
import resume from './images/resume.png';
import resumePdf from './images/Resume.pdf';

const Nav = () => {
    const [dropped, setDropped] = useState(false);
    const [showThumb, setShowThumb] = useState(false);

    const handleClick = () => {
        const hamburger = document.querySelector('.hamburger');
        hamburger.classList.toggle('active');
        setDropped(!dropped);
    }
    const handleIconClick = (url, isResume) => {
        if (!isResume) {
            window.open(url)
        } else {
            window.open(resumePdf, '_blank', 'fullscreen=yes')
        }
    }
    useEffect(() => {
        if (window.innerWidth < 841 && !showThumb) {
            setShowThumb(true)
        } else if (window.innerWidth > 840 && showThumb) {
            setShowThumb(false)
            setDropped(false)
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth < 841 && !showThumb) {
                setShowThumb(true)
            } else if (window.innerWidth > 840 && showThumb) {
                setShowThumb(false)
                setDropped(false)
            }
        })
    })
    if (showThumb) {
        return (
            <nav className={dropped ? "flex col ai-c show thumb" : "flex col ai-c thumb"}>
                <div
                    className="hamburger flex col jc-sb"
                    onClick={handleClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="menu flex col ai-c">
                    <ul className="flex col ai-c jc-sb">
                        <a href="#about" onClick={handleClick}>About</a>
                        <a href="#projects" onClick={handleClick}>Projects</a>
                        <a href="#contact" onClick={handleClick}>Contact</a>
                    </ul>
                    <div className="icon-container flex ai-c jc-sb">
                        <img src={linkedin} alt="" onClick={() => handleIconClick('https://github.com/Bbenedict20', false)} />
                        <img src={git} alt="" onClick={() => handleIconClick('https://github.com/Bbenedict20', false)} />
                        <img src={resume} alt="" onClick={() => handleIconClick(null, true)} />
                    </div>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="flex ai-c jc-sb navi">
                <div className="icon-container flex ai-c jc-sb">
                    <img src={linkedin} alt="" onClick={() => handleIconClick('https://www.linkedin.com/in/bradley-benedict-a19a3321a/', false)} />
                    <img src={git} alt="" onClick={() => handleIconClick('https://github.com/Bbenedict20', false)} />
                    <img src={resume} alt="" onClick={() => handleIconClick(null, true)} />
                </div>
                <ul className="flex ai-c js-sb">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </ul>
            </nav>
        )
    }
}

export default Nav;