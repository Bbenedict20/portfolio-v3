import React from 'react'
import Card from './Card';
import Contact from './Contact';
import './styles/Body.css';
import ProPic from './images/ProPic.png';
import DownArrow from './images/DownArrow.png';
import vueJS from './images/vueJS.svg';
import mongoDB from './images/mongoDB.svg';
import reactJS from './images/reactJS.svg';
import nodeJS from './images/nodeJS.svg';
import sass from './images/sass.svg';
import shopImg from './images/shopImg.png';
import golfImg from './images/golfImg.png';
import splitImg from './images/splitImg.png';
import portImg from './images/portImg.png';
import linkedin from './images/linkedin-icon.svg';
import git from './images/gitLogoW.svg';
import resume from './images/resume.png';

const Body = () => {
    return (
        <div>
            <section className="header flex col ai-c">
                <div className="flex col ai-c">
                    <h1>Brad Benedict</h1>
                    <h2>Front-end Developer</h2>
                    <h2>Denver, CO</h2>
                    <img src={ProPic} alt="Image of me" />
                </div>
                <img src={DownArrow} alt="Down arrow" className="arrow" id="about" />
            </section>
            <section className="about flex col ai-c" id="projects">
                <h1>About</h1>
                <p>
                    I have been working a server for he past few years and am ready for a change!
                    I have been interested in coding since I was young and have finally decided to pursue
                    it as a career. I have been self teaching myself web development and feel confident in
                    my abilities. Currently I am searching for a junior developer position where I can
                    continue my learning and put my skills to the test. I am currently living in Lakewood, CO!
                    In my free time I love to snowboard, golf, play guitar, and make art.
                </p>
            </section>
            <section className="projects col flex ai-c">
                <h1>Projects</h1>
                <div className="card-container">
                    <Card
                        title="Snowboard Shop Website"
                        icons={[vueJS, nodeJS, mongoDB, sass]}
                        img={shopImg}
                        liveURL='https://salty-bastion-69159.herokuapp.com/'
                        gitURL='https://github.com/Bbenedict20/Golf-card/tree/master'
                        text={
                            `QUICK LOGIN INFO: Username: admin Password: Password123 or create your own account -- 
                            This website is for a made up snowboarding company created using the MEVN stack.
                            Create an account, add items to cart, view past orders, and "purchase"
                            snowboards! This was the first big project I took on using Vue 3, while
                            also learning about cookies in the browser. I learned a ton and now feel
                            confident in my abilities to work with cookies and a backend API. This project
                            also taught me a lot about sorting through data in MongoDB and returning
                            the appropriate result.
                            `
                        }
                    />
                    <Card
                        title="Golf Scorecard Application"
                        icons={[reactJS, nodeJS, mongoDB]}
                        img={golfImg}
                        liveURL='https://sleepy-refuge-44715.herokuapp.com'
                        gitURL='https://github.com/Bbenedict20/Golf-card/tree/main'
                        text={
                            `
                            QUICK LOGIN INFO - username: admin password: password123 -- or create your own account! 
                            This app was a lot of fun to build! Golfing has recently become one of my favorite things 
                            to do in my free time and I though this would be a fun way to explore a CRUD application with 
                            users. I built this using the MERN stack. This app allows you to create a new user, then add courses and rounds to keep track of your 
                            personal data! You can all check your stats for either eighteen or nine hole rounds. I learned 
                            a lot creating this and has made me feel much more confident in my abilities. One of the biggest
                            challenges I faced was creating the database with all of the users, and then accessing their 
                            different datasets. This was my first time building something this complex, but after some trial 
                            and error I was able to figure everything out.
                            `
                        }
                    />
                    <Card
                        title="Portfolio"
                        icons={[reactJS, nodeJS, sass]}
                        img={portImg}
                        liveURL='#'
                        gitURL='#'
                        text={
                            `
                            This portfolio is currently on version three! I am constantly redesigning how
                            the portfolio looks and am currently happy with how everything fits together.
                            With every redesign I start over from scratch, trying to improve the code with
                            each version! On the backend of this application I use Nodemailer to send the contact 
                            form. This was a really cool package to learn and makes contact forms a breeze.
                            `
                        }
                    />
                    <Card
                        title="Tip Splitting Application"
                        icons={[reactJS]}
                        img={splitImg}
                        liveURL='https://bbenedict20.github.io/Tip-calc-react/'
                        gitURL='https://github.com/Bbenedict20/Tip-calc-react'
                        text={
                            `
                            Tip splitting app that allows you to choose the number of people splitting the bill 
                            and your tip percentage. It then shows you the total and per person amount.
                            `
                        }
                    />

                </div>
                <div id="contact"></div>
            </section>
            <section className="contact col flex ai-c" >
                <h1>Contact</h1>
                <Contact />
            </section>
            <section className="footer flex jc-c">
                <div className="flex jc-sb">
                    <img src={linkedin} alt="" />
                    <img src={git} alt="" />
                    <img src={resume} alt="" />
                </div>
            </section>
        </div>
    )
}

export default Body;