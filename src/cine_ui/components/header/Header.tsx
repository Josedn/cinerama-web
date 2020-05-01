import React, { useState, useEffect } from "react";
import "./Header.scss";
import SearchBar from "./search_bar/SearchBar";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop: currentScrollTop } = document.documentElement || document.body;
            setShouldHideHeader(currentScrollTop !== 0);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const activeStyle = shouldHideHeader ? 'active' : '';

    return (
        <header className={"header " + activeStyle}>
            <a className="header__logo" href="/">
                <img
                    className="header__logo-image"
                    src="/images/filmstock.svg"
                    alt="Filmstock"
                ></img>
            </a>
            <ul className="header__nav">
                <li className="nav__option">
                    <Link
                        className="nav__option-anchor nav__option-anchor--selected"
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li className="nav__option">
                    <Link className="nav__option-anchor" to="/">
                        Movies
                    </Link>
                </li>
                <li className="nav__option">
                    <Link className="nav__option-anchor" to="/search">
                        Search
                    </Link>
                </li>
            </ul>
            <ul className="header__nav header__nav--options">
                <li className="nav__option">
                    <Link className="nav__option-anchor" to="/">
                        Logout
                    </Link>
                </li>
                <li className="nav__option">
                    <SearchBar />
                </li>
            </ul>
        </header>
    );
};

export default Header;
