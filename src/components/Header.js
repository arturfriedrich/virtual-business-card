import React from "react";
import Image from "../images/friedrich_artur.png"
import EmailIcon from "../images/email.png"
import LinkedInIcon from "../images/linkedin.png"

export default function Header() {
    return (
        <header>
            <img src={Image} />
            <div className="header--informations">
                <h1>Friedrich Artúr</h1>
                <h2>Frontend Developer</h2>
                <a href="friedrichartur.com">
                    <h3>friedrichartur.com</h3>
                </a>
            </div>
            <div className="header--contacts">
                <a className="header--email" href="mailto:artur.friedrich.harka@gmail.com">
                    <img src={EmailIcon} />Email
                </a>
                <a className="header--linkedin" href="https://www.linkedin.com/in/friedrich-art%C3%BAr-6840201a1/">
                    <img src={LinkedInIcon} />LinkedIn
                </a>
            </div>
        </header>
    )
}