import React from "react";
import TwitterIcon from "../images/twitter.png"
import FacebookIcon from "../images/facebook.png"
import InstagramIcon from "../images/instagram.png"
import GithubIcon from "../images/github.png"

export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/arturfriedrich7">
                <img src={TwitterIcon} />
            </a>
            <a href="https://www.facebook.com/arturfriedrich.de/">
                <img src={FacebookIcon} />
            </a>
            <a href="https://www.instagram.com/gombocarthur/">
                <img src={InstagramIcon} />
            </a>
            <a href="https://github.com/arturfriedrich">
                <img src={GithubIcon} />
            </a>
        </footer>
    )
}