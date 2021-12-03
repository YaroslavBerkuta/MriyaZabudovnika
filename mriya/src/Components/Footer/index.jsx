import React from "react";
import logo from "../../assets/img/mz-01.svg";
import label from "../../assets/img/label.png"
export default function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="footer__column">
          <div className="footer__logo">
            <img src={logo} alt="logoFoter" width={110}/>
          </div>
          <div className="footer__deskription">
            <p>
              Виробництво металопластикових виробів, вхідних та міжкімнатних
              дверей
            </p>
          </div>
        </div>
        <div className="footer__column">
          <ul className="footer__menu">
            <li>
              <a href="/offer">Ми пропонуємо</a>
            </li>
            <li>
              <a href="/gallery">Галерея</a>
            </li>
            <li>
              <a href="/about-us">Про нас</a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h5>Слідкуйте за нами</h5>
          <div className="footer__social">
            <a href="https://www.instagram.com/mriya_zabudovnika/">
              <img src="./assets/img/instagram.svg" alt="instagram" />
            </a>
            <a href="https://www.facebook.com/%D0%A2%D0%9E%D0%92-%D0%9C%D1%80%D1%96%D1%8F-%D0%B7%D0%B0%D0%B1%D1%83%D0%B4%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA%D0%B0-1630665907233158">
              <img src="./assets/img/facebook.svg" alt="facebook" />
            </a>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__adress">
            <p>Хмельницький, вулиця Чорновола 31/1</p>
          </div>
        </div>
      </div>
    </footer>
    <div className="label">
      <div className="container">
        <a href="https://creatory.studio/"><img src={label} alt="" /></a>
      </div>
    </div>
    </>
  );
}
