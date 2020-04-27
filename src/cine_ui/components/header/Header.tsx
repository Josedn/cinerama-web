import React, { useState, useEffect, Dispatch } from "react";
import "./Header.scss";
import SearchBar from "./search_bar/SearchBar";
import { Link } from "react-router-dom";

const handleScroll = (setShouldHideHeader: Dispatch<React.SetStateAction<boolean>>) => {
    return () => {
        const { scrollTop: currentScrollTop } = document.documentElement || document.body;
        setShouldHideHeader(currentScrollTop !== 0);
    }
};

const Header: React.FC = () => {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll(setShouldHideHeader));
        return () => window.removeEventListener('scroll', handleScroll(setShouldHideHeader));
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
                    <Link className="nav__option-anchor" to="/watch">
                        Movies
                    </Link>
                </li>
                <li className="nav__option">
                    <Link className="nav__option-anchor" to="/">
                        Search
                    </Link>
                </li>
            </ul>
            <ul className="header__nav header__nav--options">
                <li className="nav__option">
                    <Link className="nav__option-anchor" to="/">
                        Salir
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
