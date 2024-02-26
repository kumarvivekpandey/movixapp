import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                @  2024 copyright Design and Developed by <a className="cpyright"   href="https://myportfolio-delta-umber.vercel.app/" target="_blank" > VIVEK Kumar </a>
               
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                      <a className="cpyright"   href="https://www.linkedin.com/in/kumar-vivek-pandey/">  <FaLinkedin /> </a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
