import React from "react";
import TwitterIcon from "../images/twitter.png"
import FacebookIcon from "../images/facebook.png"
import InstagramIcon from "../images/instagram.png"
import GithubIcon from "../images/github.png"

export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/arturfriedrich7" target="_blank">
                <img src={TwitterIcon} />
            </a>
            <a href="https://www.facebook.com/arturfriedrich.de/" target="_blank">
                <img src={FacebookIcon} />
            </a>
            <a href="https://www.instagram.com/gombocarthur/" target="_blank">
                <img src={InstagramIcon} />
            </a>
            <a href="https://github.com/arturfriedrich" target="_blank">
                <img src={GithubIcon} />
            </a>
        </footer>
    )
}