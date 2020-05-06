import React, { useState, useEffect, SyntheticEvent } from "react";
import "./Header.scss";
import SearchBar from "./search_bar/SearchBar";
import { NavLink, Link } from "react-router-dom";
import CineEnvironment from "../../../cine_engine/CineEnvironment";
import Constants from "../../../cine_engine/misc/Constants";

const handleSearchClick = (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
    CineEnvironment.getCine().cineState.handleStartSearch();
};

const Header: React.FC = () => {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const { home, explore, logout, search } = CineEnvironment.getCine().cineUniversal.header;

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
            <Link className="header__logo" to="/">
                <img
                    className="header__logo-image"
                    src="/images/filmstock.svg"
                    alt="Filmstock"
                ></img>
            </Link>
            <ul className="header__nav">
                <li className="nav__option">
                    <NavLink
                        className="nav__option-anchor"
                        activeClassName="nav__option-anchor--selected"
                        exact to={Constants.PAGES.HOME.url}
                    >
                        {home}
                    </NavLink>
                </li>
                <li className="nav__option">
                    <NavLink
                        className="nav__option-anchor"
                        activeClassName="nav__option-anchor--selected"
                        exact to={Constants.PAGES.EXPLORE.url}>
                        {explore}
                    </NavLink>
                </li>
                <li className="nav__option">
                    <NavLink
                        to="/search"
                        onClick={handleSearchClick}
                        className="nav__option-anchor"
                        activeClassName="nav__option-anchor--selected">
                        {search}
                    </NavLink>
                </li>
                <li className="nav__option">
                    <button className="nav__option-anchor">
                        Party
                    </button>
                </li>
            </ul>
            <ul className="header__nav header__nav--options">
                <li className="nav__option">
                    <NavLink
                        className="nav__option-anchor"
                        activeClassName="nav__option-anchor--selected"
                        exact to={Constants.PAGES.LOGOUT.url}>
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
