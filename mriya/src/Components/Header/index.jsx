import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo1.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="header__menu">
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <Link to="/offer" className="menu__link">
                  Ми пропонуємо
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/gallery" className="menu__link">
                  Галерея
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/contact" className="menu__link">
                  Контакти
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/about" className="menu__link">
                  Про нас
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__phone">
            <a href="tel:+380676738289" className="phone__number">
              +380 67 673 8289
            </a>
          </div>
        </div>
        <div className="header__burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
