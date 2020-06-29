import React from "react";
import "./styles.scss";
import Headshot from "./../../assets/headshot1.png"
import Phone from "./../../assets/phone.svg"
import Mail from "./../../assets/mail.svg"

const About = props => {
return (
<div className="aboutContainer">
    <div className="heroContainer">
        <div className="aboutHero">
            <h1>Hello Friends.</h1>
            <h4>I’m Vance, a creative professional that is passionate about web development.<br />Please, enjoy my
                website!</h4>
        </div>
        <img src={Headshot} alt="Vance" />
    </div>
    <div className="aboutContent">
        <div className="aboutPromo">
            <h4>If you’re looking for a reliable and hard working teammate, look no further.</h4>
        </div>
        <div className="aboutContact">
            <h4>Contact Vance</h4>
            <a href="tel:804-774-8169" class="tel"><img src={Phone} alt="Phone Link" /></a>
            <a href="mailto:densonincorp@gmail.com" class="mail"><img src={Mail} alt="Email Link" /></a>
        </div>
        <h3>About</h3>
        <h4>I’m currently a senior quality assurance engineer. My ultimate goal is to transition to full-time web
            development and create great content!<br /><br />I’ve always been very comfortable with all aspects of
            computing and enjoy the technical challenges that are involved in software and hardware
            development.<br /><br />A spouse, child and two dogs occupy a fair amout of free time, however, outside of
            that I make a concerted effort to continually learn and grow professionally. My current hobbies are spending
            time with family, getting to the ocean as often as possible and, of course, sharpening my JS, HTML and CSS
            skills!
        </h4>
    </div>
</div>
);
};

export default About;