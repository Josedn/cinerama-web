import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            Filmstock.tv &copy; 2020 - All rights reserved to their respective owners
            <br />
            <a href="/dmca">DMCA</a> - <a href="/terms">Terms</a> - <a href="/contact">Contact</a>
        </footer>
    );
};


export default Footer;