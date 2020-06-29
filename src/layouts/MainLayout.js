import React from "react";
import Header from "./../components/Header"
import SocialLinks from "./../components/SocialLinks"

const MainLayout = props => {
    return (
        <div>
            <Header />
            <SocialLinks />
            <div className="main">
                {props.children}
            </div>
        </div>
    );
}

export default MainLayout;
