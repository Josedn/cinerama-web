import React from "react";
import "./Footer.scss";
import CineEnvironment from "../../../cine_engine/CineEnvironment";

const Footer: React.FC = () => {

    const { copyrightInfo, contact, dmca, terms } = CineEnvironment.getCine().cineUniversal.footer;

    return (
        <footer className="footer">
            {copyrightInfo}
            <br />
            <a href="/dmca">{dmca}</a> - <a href="/terms">{terms}</a> - <a href="/contact">{contact}</a>
        </footer>
    );
};

export default Footer;