import React from "react";
import "./styles.scss";
import Headshot from "./../../assets/headshot1.png"

const About = props => {
    return (
        <div className="heroContainer">
            <div className="aboutHero">
                <h1>Hello Friends.</h1>
                <h4>I’m Vance, a creative professional that is passionate about web development.<br />Please, enjoy my website!</h4>
            </div>
            <img src={Headshot} alt="Vance" />
        </div >
    );
};

export default About;