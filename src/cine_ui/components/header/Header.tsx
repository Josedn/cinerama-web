import React from "react";
import "./Header.scss";
import SearchBar from "./search_bar/SearchBar";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header">
            <a className="header__logo" href="/">
                <img
                    className="header__logo-image"
                    src="/images/filmstock.png"
                    alt="Filmstock"
                ></img>
            </a>
            <ul className="header__nav">
                <li className="nav__option">
                    <Link
                        className="nav__option-anchor nav__option-anchor--selected"
                        to="/"
                    >
                        Inicio
                    </Link>
                </li>
                <li className="nav__option">
                    <Link className="nav__option-anchor" to="/watch">
                        Programas
                    </Link>
                </li>
                <li className="nav__option">
                    <Link className="nav__option-anchor" to="/">
                        Películas
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
