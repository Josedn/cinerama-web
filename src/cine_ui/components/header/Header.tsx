import React, { useState, useEffect } from "react";
import "./Header.scss";
import SearchBar from "./search_bar/SearchBar";
import { NavLink } from "react-router-dom";
import CineEnvironment from "../../../cine_engine/CineEnvironment";

const handleSearchClick = () => {
    console.log('lol');
};

const Header: React.FC = () => {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);

    const { home, movies, logout, search } = CineEnvironment.getCine().cineUniversal.header;

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
                    <NavLink
                        className="nav__option-anchor"
                        activeClassName="nav__option-anchor--selected"
                        exact to="/"
                    >
                        {home}
                    </NavLink>
                </li>
                <li className="nav__option">
                    <NavLink
                        className="nav__option-anchor"
                        activeClassName="nav__option-anchor--selected"
                        exact to="/movies">
                        {movies}
                    </NavLink>
                </li>
                <li className="nav__option">
                    <button onClick={handleSearchClick} className="nav__option-anchor">
                        {search}
                    </button>
                </li>
            </ul>
            <ul className="header__nav header__nav--options">
                <li className="nav__option">
                    <NavLink
                        className="nav__option-anchor"
                        activeClassName="nav__option-anchor--selected"
                        exact to="/logout">
                        {logout}
                    </NavLink>
                </li>
                <li className="nav__option">
                    <SearchBar />
                </li>
            </ul>
        </header>
    );
};

export default Header;
