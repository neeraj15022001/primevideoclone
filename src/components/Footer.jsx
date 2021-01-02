import React from 'react';
import "./css/Footer.css";
import Logo from "../assets/logo.png"

function Footer() {
    return (
        <div className="footer">
            <img src={Logo} alt=""/>
            <ul className="footer__links">
                <li><a href="#">Terms and Privacy Notice</a></li>
                <li><a href="#">Send Us Feedback</a></li>
                <li><a href="#">Help</a></li>
                <li>© 1996-2021, AmazonFake.com, Inc. or its affiliates</li>
            </ul>
        </div>
    );
}

export default Footer
