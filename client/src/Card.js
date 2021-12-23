import React, { useEffect } from 'react'
import './styles/Card.css';
import github from './images/github-wht.svg';

const Card = ({ title, icons, img, text, liveURL, gitURL }) => {
    useEffect(() => {
        const imageContainer = document.querySelector('.image');
        imageContainer.style.backgroundImage = `${img}`
    })
    const renderIcons = (arr) => {
        return (
            arr.map((item) => (
                <img
                    src={item}
                    className={item.includes('react') ? 'react' : null}
                    key={item.toString()}
                ></img>
            ))
        )
    }
    const handleClick = (live) => {
        if (live) {
            window.open(liveURL);
        } else {
            window.open(gitURL);
        }
    }
    return (
        <div className="card col flex ai-c">
            <h2>
                {title}
            </h2>
            <div className="logo-container flex jc-c">
                {renderIcons(icons)}
            </div>
            <div className="textbox">
                <p>
                    {text}
                </p>
            </div>
            <div className="image">
                <img className="bg-img" src={img} alt="" />
                <button onClick={() => handleClick(true)} id="live">See Live</button>
                <img onClick={() => handleClick(false)} id="git" src={github} alt="" />
            </div>
        </div >
    )
}

export default Card;