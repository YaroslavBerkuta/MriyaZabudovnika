import React from "react";

import Benefits from "../Components/Benefits";
import HeroTab from "../Components/HeroTab";
import HomeCatalog from "../Components/HomeCatalog";
import MainForm from "../Components/MainForm";
import Partners from "../Components/Partners";

export default function Home({ DB }) {
  return (
    <React.Fragment>
      <section className="hero">
        <div className="container">
          <div className="hero__flex">
            <div className="hero__left">
              <h1 className="hero__title">Мрія стає ближче</h1>
              <p className="hero__description">
                Виробництво металопластикових виробів вхідних та міжкімнатних
                дверей
              </p>
              <div className="hero__form">
                <form action="../telegram.php" method="post">
                  <input
                    type="tel"
                    name="user_phone"
                    className="hero__input"
                    id="user_phone"
                    placeholder="Номер телефону"
                  />
                  <input type="submit" className="hero__button" value="" />
                </form>
                <p className="hero__form-description">
                  Залишите свої контактні дані і менеджер зв'яжеться з вами
                </p>
              </div>
            </div>
            <HeroTab DB={DB} />
          </div>
          <div className="hero__bottom">
            <Benefits DB={DB} />
          </div>
        </div>
      </section>
      <HomeCatalog DB={DB} />
      <Partners DB={DB} />
      <MainForm />
      <section className="portfolio">
        <div className="container">
          <h2 className="title">Наші роботи</h2>
          <div className="portfolio__flex">
            <div className="portfolio__item">
              <img src="./assets/img/portfolio1.jpg" alt="" />
            </div>
            <div className="portfolio__item">
              <img src="./assets/img/portfolio2.jpg" alt="" />
            </div>
            <div className="portfolio__item">
              <img src="./assets/img/portfolio3.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container">
          <h2 className="title">Новини</h2>
          <div className="news__flex">
            <div className="news__item">
              <div className="news__img">
                <img src="./img/news.jpg" alt="" />
              </div>
              <div className="news__info">
                <span>16.04.2021</span>
                <h4>Нове обладнення</h4>
                <a href="https://www.google.com.ua/" className="news__more">
                  Більше
                </a>
              </div>
            </div>
            <div className="news__item">
              <div className="news__img">
                <img src="./img/news.jpg" alt="" />
              </div>
              <div className="news__info">
                <span>16.04.2021</span>
                <h4>Нове обладнення</h4>
                <a href="https://www.google.com.ua/" className="news__more">
                  Більше
                </a>
              </div>
            </div>
            <div className="news__item">
              <div className="news__img">
                <img src="./img/news.jpg" alt="" />
              </div>
              <div className="news__info">
                <span>16.04.2021</span>
                <h4>Нове обладнення</h4>
                <a href="https://www.google.com.ua/" className="news__more">
                  Більше
                </a>
              </div>
            </div>
            <div className="news__item">
              <div className="news__img">
                <img src="./img/news.jpg" alt="" />
              </div>
              <div className="news__info">
                <span>16.04.2021</span>
                <h4>Нове обладнення</h4>
                <a href="https://www.google.com.ua/" className="news__more">
                  Більше
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
