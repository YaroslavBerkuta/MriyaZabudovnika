import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MainForm from "../Components/MainForm";
SwiperCore.use([Navigation]);
const manufacturer = [
  {
    img: "./assets/img/partner/Alutex.svg",
    alt: "Alutex",
  },
  {
    img: "./assets/img/partner/Brama.svg",
    alt: "Brama",
  },
  {
    img: "./assets/img/partner/Leadors.svg",
    alt: "Leadors",
  },
  {
    img: "./assets/img/partner/Rodos.svg",
    alt: "Rodos",
  },
  {
    img: "./assets/img/partner/stray.svg",
    alt: "stray",
  },
  {
    img: "./assets/img/partner/Terminus.svg",
    alt: "Terminus",
  },
  {
    img: "./assets/img/partner/papaCarlo.png",
    alt: "papaCarlo",
  },
];
const IntermediateDoors = [
  {
    img: "./assets/img/AURA.jpg",
    brand: "./assets/img/partner/Rodos.svg",
    title: "Сталь і Дерево",
    text: "Модельний ряд компанії представлений чотирма великими напрямками : двері в ПВХ декорах  ПВХ покриття не вигоряє від сонячних променів, і прослужать кілька десятків років фарбовані двері  висока вологостійкість, завдяки фарбі і лаку двері не вбирає воду і не деформується від вологості шпоновані двері  кожні двері унікальна і неповторна завдяки природному дерев'яному малюнку двері без покриття  це в першу чергу екологічно Основою для виготовлення є зрощений брус, який виготовляє компанія RODOS.Модельний ряд налічує понад 200 моделей. Виробник гарантує відповідність дверних блоків вимогам ДСТУ.",
  },
  {
    img: "./assets/img/terminus.jpg",
    brand: "./assets/img/partner/Terminus.svg",
    title: "Сталь і Дерево",
    text: "Каталог цього бренду налічує сотні оригінальних рішень. Для виготовлення дверей використовуються екологічно чисті матеріали. Виробник гарантує відповідність дверних блоків вимогам ДСТУ. Основним матеріалом для виготовлення міжкімнатних дверей Термінус є деревні листи, які зберігають структуру волокон. Кінцеву вартість виробу визначає обрана порода дерева. Шпоновані двері мають хороші експлуатаційні характеристики, незважаючи на тонкий зріз, з часом він не розсихається і не деформується.",
  },
  {
    img: "./assets/img/papa.jpeg",
    brand: "./assets/img/partner/papaCarlo.png",
    title: "Сталь і Дерево",
    text: "Понад 150 моделей міжкімнатних дверей різних стилів представлені у 50 кольорах. Діапазон цін від економ до преміум сегменту. На фабриці «Папа Карло» впроваджено систему управління якістю ISO 9001, а також систему екологічного менеджменту ISO 14001. Всі двері в основних колекціях можуть бути виготовлені в розсувному варіанті. Що дозволяє виготовляти вироби значних розмірів - до 2400 мм за висотою і 1100 мм за шириною.",
  },
  {
    img: "./assets/img/brama.jpg",
    brand: "./assets/img/partner/Brama.svg",
    title: "Сталь і Дерево",
    text: "Фабрика спеціалізується на виробництві шпонованих та ламінованих дверних полотен. Всі моделі мають полотна зі зрощеного соснового бруса, який з двох сторін обшитий HDF-плитами. З такого ж бруса виготовлена коробка, яка доповнена зносостійким ущільнювачем. Компанія «Брама» випускає понад 250 модифікацій дверей від традиційно-розкішних до лаконічно-сучасних за декором. До того ж в реальності вибір ще більший: з урахуванням різних поєднань забарвлення та різних типів дверної коробки.",
  },
  {
    img: "./assets/img/korfad.jpg",
    brand: "./assets/img/partner/korfad.png",
    title: "Сталь і Дерево",
    text: "Фабрика виробляє збірні, щитові міжкімнатні двері та погонажні вироби з використанням італійського захисно-декоративного покриття «SINCROLAM». Воно дозволяє гарантувати екологічну безпеку продукції. Модельний ряд нараховує 25 колекцій в 2700 варіаціях дверних полотен. Цінова категорія від економ до преміум сегменту.",
  },
  {
    img: "./assets/img/categorie.png",
    brand: "./assets/img/partner/Leadors.svg",
    title: "Сталь і Дерево",
    text: "На фабриці Leador здійснюється повний цикл виробництва міжкімнатних дверей на європейському обладнанні. Компанія дотримується високих стандартів виробництва. В основі більшості виробів лежить використання переклеєного масиву дерева з листовим МДФ. Завдяки цьому досягається висока міцність і жорсткість дверного полотна. У складі фінішного покриття немає фенолів, розчинників і формальдегідів.",
  },
  {
    img: "./assets/img/categorie.png",
    brand: "./assets/img/partner/newStyle.png",
    title: "Сталь і Дерево",
    text: "Збірні, каркасно-щитові двері середнього цінового сегменту. В каталозі фабрики є моделі для всіх стилів дизайну: класика, техно, неокласика, модерн, ар-деко, лофт. Усі декори для дверей створені індивідуально під час відвідування найбільших світових виробників. Виробництво сертифіковане міжнародними та європейськими стандартами якості: ISO 9001: 2015, FSC, CE. Це означає, що на всіх етапах виготовлення дверей використовуються тільки екологічно безпечна сировина, перевірені висококласні технології.",
  },
  {
    img: "./assets/img/categorie.png",
    brand: "",
    title: "Сталь і Дерево",
    text: "Виробник пропонує міжкімнатні двері ламіновані, міжкімнатні двері з мдф. Завдяки конструкції дверного блоку (чверть і коробка з ущільнювачем) такі двері запобігають протягам і забезпечують кращу звукоізоляцію. Дверне полотно може бути, як засклене , такі глухе.",
  },
];
const enterDors = [
  {
    img: "./assets/img/categorie.png",
    brand: "./assets/img/partner/Rodos.svg",
    title: "Сталь і Дерево",
    text: "Виробник пропонує міжкімнатні двері ламіновані, міжкімнатні двері з мдф. Завдяки конструкції дверного блоку (чверть і коробка з ущільнювачем) такі двері запобігають протягам і забезпечують кращу звукоізоляцію. Дверне полотно може бути, як засклене , такі глухе.",
  },
  {
    img: "./assets/img/categorie.png",
    brand: "./assets/img/partner/Stray.svg",
    title: "Сталь і Дерево",
    text: "Компанія пропонує вхідні броньовані двері, які і підкреслюють інтер’єр і надійно захистять ваш будинок від злому. Європейське обладнання дає можливість виготовляти не тільки красиві двері, але і надійні з можливістю на замовлення виготовляти нестандартні розміри. У модельному ряді два основних варіанти - Standart і Prestige. Другий відрізняється більшою товщиною полотна і утеплювача та якістю замків. Також на основі цих варіантів розроблені інші серії. Всі моделі практичні, що гарантують високий ступінь захисту для приміщення будь – якого типу.",
  },
  {
    img: "./assets/img/categorie.png",
    brand: "./assets/img/partner/Stray.svg",
    title: "Сталь і Дерево",
    text: "На заводі SteelArt виробляються всі комплектуючі до дверей, тому виробник повністю відповідає за якість продукту і впевнений у кожній деталі. В двері з підвищеним ступенем захисту для більш охоронюваних об'єктів. У виробництві використовується полімерний композитний матеріал, який ідеально підходить для експлуатації у вуличних умовах. Полімерна накладка не вбирає вологу і не боїться морозу і дощу",
  },
  {
    img: "./assets/img/categorie.png",
    brand: "./assets/img/partner/Stray.svg",
    title: "Сталь і Дерево",
    text: "Вхідні двері MAGDA представлені широким асортиментом декоративного оформлення і розмірів. Двері є і з лівим, і з правим розташуванням петель. На виробництві є можливість виготовити двері не стандартних розмірів. Максимальна висота дверного полотна за індивідуальним замовленням складає 220 см, ширина - 100 см. Поверхня дверного полотна зазвичай виконана рельєфною, і для цього використані плити з ламінованої, водостійкої плити МДФ високої якості. ",
  },
  {
    img: "./assets/img/categorie.png",
    brand: "./assets/img/partner/Stray.svg",
    title: "Сталь і Дерево",
    text: "Вхідні металеві двері з МДФ накладками, ковкою та склопакетами.Незалежно від серії, дверний блок «Термопласт» - це сталева коробка і полотно, зібране на металевому каркасі. Конструкція має високу стійкість до ударного навантаження і різання. Всілякі прийоми злому, наприклад, висаджування, виведення, зняття двері з петель практично виключаються. Рама дверної коробки зварена з цільногнутого профілю листової сталі. Товщина сталевого листа різна, і в залежності від класу виробу. Сталеві ребра надають конструкції жорсткість, зсередини дверне полотно утеплено мінеральною ватою. Виробник комплектує дверні блоки ручками, врізними і накладними замками марок: MOTTURA, TESLA, «Бастiон» і «Гранiт»",
  },
];
export default function EnterDors() {
  return (
    <>
      <section>
        <div className="container">
          <div className="container__flex">
            <div className="text">
              <h1>Вхідні, міжкімнаті двері</h1>
              <p>Металеві двері, плита мдф, ковка і скло</p>
            </div>
            <Swiper
              className="hero__slider"
              navigation={{
                prevEl: ".catalog-button-prev",
                nextEl: ".catalog-button-next",
                disabledClass: "catalog-button-disable",
              }}
            >
              <SwiperSlide className="hero__slider-slide">
                <img src="./assets/img/dors.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="hero__slider-slide">
                <img src="./assets/img/dors.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="hero__slider-slide">
                <img src="./assets/img/dors.png" alt="" />
              </SwiperSlide>
              <div className="catalog__navigation">
                <div className="catalog-button-prev"></div>
                <div className="catalog-button-next"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="manufacturer">
        <div className="container">
          <h2 className="title">Виробоники</h2>
          <div className="manufacturer__flex">
            {manufacturer.map((item, index) => (
              <div className="manufacturer__img" key={index}>
                <img src={item.img} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="title">Міжкімнатні двері</h2>
          <Swiper
            className="categorie__flex"
            navigation={{
              prevEl: ".catalog-button-prev",
              nextEl: ".catalog-button-next",
              disabledClass: "catalog-button-disable",
            }}
          >
            {IntermediateDoors.map((item, index) => (
              <SwiperSlide className="categorie__item" key={index}>
                <div className="categorie__img">
                  <img src={item.img} alt="dors" />
                </div>
                <div className="categorie__info">
                  <div className="categorie__compani">
                    <img src={item.brand} alt="dors" />
                  </div>
                  <div className="categorie__info-title">{item.title}</div>
                  <div className="categorie__info-description">{item.text}</div>
                </div>
              </SwiperSlide>
            ))}
            <div className="catalog__navigation">
              <div className="catalog-button-prev"></div>
              <div className="catalog-button-next"></div>
            </div>
          </Swiper>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="title">Вхідні двері</h2>

          <Swiper
            className="categorie__flex"
            navigation={{
              prevEl: ".catalog-button-prev",
              nextEl: ".catalog-button-next",
              disabledClass: "catalog-button-disable",
            }}
          >
            {enterDors.map((item, index) => (
              <SwiperSlide className="categorie__item" key={index}>
                <div className="categorie__img">
                  <img src={item.img} alt="enderLogo" />
                </div>
                <div className="categorie__info">
                  <div className="categorie__compani">
                    <img src={item.brand} alt="" />
                  </div>
                  <div className="categorie__info-title">{item.title}</div>
                  <div className="categorie__info-description">{item.text}</div>
                </div>
              </SwiperSlide>
            ))}
            <div className="catalog__navigation">
              <div className="catalog-button-prev"></div>
              <div className="catalog-button-next"></div>
            </div>
          </Swiper>
        </div>
      </section>
      <section className="categories">
        <div className="container">
          <h2 className="title">Фурнитура</h2>
          <Swiper
            className="categorie__flex"
            navigation={{
              prevEl: ".catalog-button-prev",
              nextEl: ".catalog-button-next",
              disabledClass: "catalog-button-disable",
            }}
          >
            <SwiperSlide className="categorie__item">
              <div className="categorie__img">
                <img src="./assets/img/categorie.png" alt="" />
              </div>
              <div className="categorie__info">
                <div className="categorie__compani">
                  <img src="./assets/img/partner/Rodos.svg" alt="" />
                </div>
                <div className="categorie__info-title">Сталь і дерево</div>
                <div className="categorie__info-description">
                  Кale - турецька фурнітура випускається в декількох серіях для
                  різноманітних конструкцій. Широкий вибір фурнітури дозволяє
                  кожному споживачеві з легкістю підібрати необхідні механізми
                  для алюмінієвих і металопластикових дверей.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="categorie__item">
              <div className="categorie__img">
                <img src="./assets/img/categorie.png" alt="" />
              </div>
              <div className="categorie__info">
                <div className="categorie__compani">
                  <img src="./assets/img/partner/Rodos.svg" alt="" />
                </div>
                <div className="categorie__info-title">Сталь і дерево</div>
                <div className="categorie__info-description">
                  FORME - італійський бренд. Колекції фурнітури регулярно
                  поповнюються новими моделями. Дизайн ручок розробляються за
                  участю кращих європейських фахівців, форма кожного виробу
                  ретельно продумана і здатна задовольнити самого вимогливого
                  покупця.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="categorie__item">
              <div className="categorie__img">
                <img src="./assets/img/categorie.png" alt="" />
              </div>
              <div className="categorie__info">
                <div className="categorie__compani">
                  <img src="./assets/img/partner/Rodos.svg" alt="" />
                </div>
                <div className="categorie__info-title">Сталь і дерево</div>
                <div className="categorie__info-description">
                  Італійська компанія OTLAV використовує для виробництва петель
                  і інших виробів: бронзу, латунь, нікель. При цьому багато
                  уваги приділяється екологічності виробництва - це частина
                  політики фірми. В асортименті продукції є петлі різних типів.
                  Але найбільшу популярність зараз набирає новітня розробка -
                  приховані петлі Invisacta. Вони універсальні і можуть
                  застосовуватися для будь-яких дверей.
                </div>
              </div>
            </SwiperSlide>
            <div className="catalog__navigation">
              <div className="catalog-button-prev"></div>
              <div className="catalog-button-next"></div>
            </div>
          </Swiper>
        </div>
      </section>
      <MainForm />
    </>
  );
}
