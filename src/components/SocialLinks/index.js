import React from "react";
import "./styles.scss";
import gitHub from "./../../assets/github.svg";
import linkedIn from "./../../assets/linkedin.svg";
import facebook from "./../../assets/facebook.svg";

const SocialLinks = props => {
    return (
        <div className="socialContainer">
            <div className="socialLinks">
                <img src={linkedIn} alt="Vance's LinkedIn account link" />
                <img src={gitHub} alt="Vance's GitHub account link" />
                <img src={facebook} alt="Vance's Facebook account link" />
            </div>
        </div>
    );
};

export default SocialLinks;