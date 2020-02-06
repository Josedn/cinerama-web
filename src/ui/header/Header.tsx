import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img className="header__logo-image" src="/images/netflix.png" alt="Netflix"></img>
      </a>
      <ul className="header__nav">
        <li className="nav__option"><a className="nav__option-anchor nav__option-anchor--selected" href="/">Inicio</a></li>
        <li className="nav__option"><a className="nav__option-anchor" href="/">Programas</a></li>
        <li className="nav__option"><a className="nav__option-anchor" href="/">Películas</a></li>
      </ul>
      <ul className="header__nav header__nav--options">
        <li className="nav__option"><a className="nav__option-anchor" href="/">Salir</a></li>
        <li className="nav__option">
          <div className="nav__search">
            <i className="nav__search-icon-glass fa fa-search"></i>
            <input className="nav__search-input" type="text" placeholder="Títulos, personas, géneros" />
            <i className="nav__search-icon-close fa fa-close"></i>
          </div>
        </li>
      </ul>
    </header>
  );
}

export default Header;
