import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img className="header__logo-image" src="/images/netflix.png" alt="Netflix"></img>
      </a>
      <ul className="header__nav">
        <li className="nav__option"><a className="nav__option-anchor nav__option-anchor--selected" href="/xd">Inicio</a></li>
        <li className="nav__option"><a className="nav__option-anchor" href="/">Programas</a></li>
        <li className="nav__option"><a className="nav__option-anchor" href="/">Películas</a></li>
      </ul>
    </header>
  );
}

export default Header;
