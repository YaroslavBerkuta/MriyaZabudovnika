import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MainForm from "../Components/MainForm";
import stortz from "../assets/img/kaban.png";

export default function MetalPlasticProducts() {
  SwiperCore.use([Autoplay, Navigation]);
  const furnitura = [
    {
      img: "./assets/img/furnitura1.png",
      alt: "furnitura",
    },
    {
      img: "./assets/img/furnitura1.png",
      alt: "furnitura",
    },
  ];
  const newLineSlide = [
    {
      img: "./assets/img/newLine.png",
      alt: "slide",
    },
    {
      img: "./assets/img/newLine.png",
      alt: "slide",
    },
  ];
  const WDS = [
    {
      img: "./assets/img/profileWds1.png",
      alt: "wds Profile",
      profile: "WDS 8S",
      paket:
        "Двокамерний склопакет шириною 44 мм, заповнений аргоном.Зовнішнє та внутрішнє скло з енергозберігаючим напиленням. 4i-16Ar-4-16Ar-4i",
      furnitura: "Протизламна",
      color: "Будь-який із палітри WDS Color",
    },
    {
      img: "./assets/img/profileWds2.png",
      alt: "wds Profile",
      profile: "WDS 7S",
      paket:
        "Двокамерний склопакет шириною 40 мм, заповнений аргоном. Зовнішнє та внутрішнє скло з енергозберігаючим напиленням. 4i-14Ar-4-14Ar-4i",
      furnitura: "Протизламна",
      color: "Будь-який із палітри WDS Color",
    },
    {
      img: "./assets/img/profileWds3.png",
      alt: "wds Profile",
      profile: "WDS 6S",
      paket:
        "Двокамерний склопакет шириною 40 мм, заповнений аргоном. Зовнішнє та внутрішнє скло з енергозберігаючим напиленням. 4i-14Ar-4-14Ar-4i",
      furnitura: "Протизламна",
      color: "Будь-який із палітри WDS Color",
    },
    {
      img: "./assets/img/profileWds4.png",
      alt: "wds Profile",
      profile: "WDS 5S",
      paket:
        "Двокамерний склопакет шириною 40 мм, заповнений аргоном. Зовнішнє та внутрішнє скло з енергозберігаючим напиленням. 4i-14Ar-4-14Ar-4i",
      furnitura: "Протизламна",
      color: "Будь-який із палітри WDS Color",
    },
  ];
  return (
    <React.Fragment>
      <section className="hero hero__page">
        <div className="container">
          <div className="hero__page-flex">
            <div className="hero__page-left">
              <span>Власне виробництво</span>
              <h1>Металопластикові вироби</h1>
              <ul>
                <li>вікна</li>
                <li>двері</li>
                <li>підвіконня</li>
                <li>конструкції для балконів та лоджій</li>
                <li>металопластикові труби</li>
                <li>водостічні системи від виробника</li>
              </ul>
            </div>
            <div className="hero__page-right">
              <div className="couter__block">
                <div>
                  <p>20+</p>
                  <span>років на ринку</span>
                </div>
                <div>
                  <p>3</p>
                  <span>Лінії</span>
                </div>
                <div>
                  <p>30+</p>
                  <span>Працівників</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="newLIne__flex">
            <Swiper
              className="newLIne__slider"
              slidesPerView={"auto"}
              loop={true}
              autoplay={{ delay: 3000 }}
            >
              {newLineSlide.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.img} alt={item.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="newLine__info">
              <h3>Нова сучасна лінія</h3>
              <p>
                Не следует, однако, забывать, что синтетическое тестирование
                предопределяет высокую востребованность соответствующих условий
                активизации. Сложно сказать, почему представители современных
                социальных резервов, превозмогая сложившуюся непростую
                экономическую ситуацию, указаны как претенденты на роль ключевых
                факторов!{" "}
              </p>
              <img src={stortz} alt="stortz" />
            </div>
          </div>
        </div>
      </section>
      <section className="wdsSlider">
        <div className="container">
          <h2 className="title">Профілі вікон WDS</h2>
          <Swiper
            className="wdsSlider__container"
            slidesPerView={"auto"}
            loop={true}
            autoplay={{ delay: 4500 }}
          >
            {WDS.map((item, index) => (
              <SwiperSlide className="profileWds__flex" key={index}>
                <div className="profileWds__img">
                  <img src={item.img} alt={item.alt} width={536} height={594} />
                </div>
                <div className="profileWds__text">
                  <ul>
                    <li>
                      <h3>Профіль</h3>
                      <p>{item.profile}</p>
                    </li>
                    <li>
                      <h3>Склопакет</h3>
                      <p>{item.paket}</p>
                    </li>
                    <li>
                      <h3>Фурнітура</h3>
                      <p>{item.paket}</p>
                    </li>
                    <li>
                      <h3>Колір</h3>
                      <p>{item.color}</p>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="quick-form">
            <p>
              Є питання? Залиште свій номер телефона та отримайте безкоштовну
              консультацію
            </p>
            <form action="../telegram.php" method="post">
              <input
                type="tel"
                name="user_phone"
                id="user_phone"
                placeholder="Вкажіть ваш номер телефону"
              />
              <button type="submit">Надіслати</button>
            </form>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="title">Системи дверей WDS</h2>
          <div className="system__flex">
            <div className="system__block">
              <img src="./assets/img/WDSSystem1.png" alt="" />
            </div>
            <div className="system__block">
              <img src="./assets/img/WDSSystem2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="title">Варіанти ламінації</h2>
          <div className="lamination__flex">
            <div className="lamination__block">
              <img src="./assets/img/lamination1.png" alt="" />
              <p>Двобічна</p>
            </div>
            <div className="lamination__block">
              <img src="./assets/img/lamination2.png" alt="" />
              <p>Внутрішня</p>
            </div>
            <div className="lamination__block">
              <img src="./assets/img/lamination3.png" alt="" />
              <p>Зовнішня</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="title">Фурнітура</h2>
          <div className="furnitura__flex">
            <Swiper
              className="furnitura__slider"
              slidesPerView={"auto"}
              loop={true}
              navigation={{
                prevEl: ".furniture-button-prev",
                nextEl: ".furniture-button-next",
              }}
            >
              {furnitura.map((item, index) => (
                <SwiperSlide className="furnitura__slide" key={index}>
                  <img src={item.img} alt={item.alt} />
                </SwiperSlide>
              ))}
              <div className="furniture__navigation">
                <div className="furniture-button-prev">
                  <img src="./assets/img/left.png" alt="" />
                </div>
                <div className="furniture-button-next">
                  <img src="./assets/img/right.png" alt="" />
                </div>
              </div>
            </Swiper>
            <div className="furnitura__brand">
              <div>
                <svg
                  width="174"
                  height="86"
                  viewBox="0 0 174 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M86.9765 0.0796296L87.2153 0L173.83 21.2952V64.864L87.2153 86H86.9651V80.4259H87.1243L168.327 60.5185V25.5497L87.1357 5.6537L86.9765 5.73333V0.0796296ZM0.441403 20.8857L86.9651 0.0796296V5.73333L5.93299 25.2312L5.76244 60.6892L86.9765 80.4259V86L0.282227 65.0347L0.441403 20.8857Z"
                    fill="#9A9A9A"
                  />
                  <path
                    d="M173.83 11.2164C173.83 8.75929 171.863 6.71167 169.407 6.71167V7.45109C171.454 7.45109 173.091 9.16881 173.091 11.2164C173.091 13.1844 171.454 14.9021 169.407 14.9021V15.6416C171.863 15.6416 173.83 13.5939 173.83 11.2164ZM169.407 11.5463V11.0572H169.737C170.226 11.0572 170.556 10.6476 170.556 10.2381C170.556 9.90823 170.305 9.41908 169.896 9.41908H169.407V8.92992H169.896C170.635 8.92992 171.124 9.41908 171.124 10.2381C171.124 10.7273 170.965 10.9775 170.556 11.3074C171.454 11.5577 170.806 13.1048 171.295 13.5143V13.5939H170.556C170.226 12.9342 170.806 11.5463 169.657 11.5463H169.407ZM169.407 6.71167C166.951 6.71167 164.984 8.75929 164.984 11.2164C164.984 13.5939 166.951 15.6416 169.407 15.6416V14.9021C167.361 14.9021 165.723 13.1844 165.723 11.2164C165.723 9.16881 167.361 7.45109 169.407 7.45109V6.71167ZM169.407 8.92992V9.41908H168.429V11.0572H169.407V11.5463H168.429V13.5939H167.77V8.92992H169.407Z"
                    fill="#9A9A9A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.4131 29.8954V55.8546L21.8164 58.2321L42.6912 22.5239L34.4141 24.5715L18.5419 52.0096L17.0638 51.6797L16.9047 28.4165L11.4131 29.8954Z"
                    fill="#9A9A9A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M50.1392 59.7905L58.0753 61.6789L58.5642 61.7585L58.9735 61.8381L59.3828 61.9178L59.7921 61.9974H60.2014H60.5312H60.7813H61.0314H61.2816H61.5317L61.6795 61.9178H61.7591L61.9183 61.8381H61.9979L62.0774 61.7585H62.157V61.6789H62.2366V61.5993H62.3162V61.5196L62.3958 61.3604L62.4754 61.2807L62.555 61.0305L62.6346 60.8712L62.7141 60.6209L62.7937 60.2911L62.8733 59.9612V59.5516L62.9529 59.3924L63.1121 26.8807L63.0325 26.3916L62.8733 25.7318L62.7141 25.163L62.464 24.7535L62.3048 24.4236L62.2253 24.2643L62.0661 24.1051L61.9865 24.0254L61.8273 23.9458H61.7477L61.4976 23.8662H61.1679L60.7586 23.7865L60.1901 23.8662L59.6216 23.9458L54.96 25.1744L54.6303 25.254H54.5507V25.3336H54.3915L54.3119 25.4929L54.1527 25.5725L53.9936 25.7318L53.8344 25.9821L53.5843 26.2323L53.4251 26.4826L53.1749 26.8125L52.9248 27.1424L52.6747 27.5519L52.4245 27.8022L50.1278 31.8974V21.9096C51.1056 20.8403 52.254 20.1122 53.6525 19.8619L58.5642 18.5537C64.3741 17.4844 67.7282 20.1918 68.6378 26.4143L68.4786 59.745C67.7396 66.6273 63.4873 68.5043 56.9383 67.1165L50.1392 65.4784V59.7905ZM37.7803 53.1585L37.7007 53.4088L37.5415 53.568L37.462 53.8183L37.3824 53.9776L37.3028 54.1368L37.2232 54.2961V54.4553L37.1436 54.535V54.6942V54.7739V54.9331V55.0127V55.0924V55.2516L37.2232 55.3313V55.4109L37.3028 55.5702V55.6498L37.3824 55.7294L37.462 55.8887L37.5415 55.9683L37.6211 56.1276L37.7803 56.2868L37.9395 56.3664L38.0191 56.5257L38.2692 56.685L38.4284 56.7646L38.6785 56.9239L38.9287 57.0831L39.0878 57.1627L50.1392 59.6995V65.3532L37.371 62.4069C31.5611 60.0294 29.8442 54.2164 33.6872 49.3818L47.7629 24.8104C48.502 23.741 49.3206 22.6831 50.1392 21.7844V31.7723L38.2692 52.4987L37.7803 53.1585Z"
                    fill="#9A9A9A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M162.29 56.2641L137.242 62.3273V24.0027L162.29 30.2252L162.449 36.1178L142.393 31.5334V40.1334H156.639L156.798 45.7871H142.563V55.1265L162.29 50.3715V56.2641Z"
                    fill="#9A9A9A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M105.476 16.1306V69.9489L111.126 68.7203V31.374L124.793 65.0346L131.262 63.5557V22.774L125.373 21.2952L125.782 51.5203L112.025 17.9393L105.476 16.1306Z"
                    fill="#9A9A9A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M86.9767 50.7809L94.0942 72.5653L99.8245 71.2571L91.229 45.2978C96.4705 43 99.9837 39.4052 99.4152 32.8529L99.8245 24.4121C98.1873 16.142 93.935 12.0468 86.9767 12.0468V17.5298H87.0563H87.5452H87.9545L88.3638 17.6095L88.7731 17.6891L89.1029 17.7687L89.4326 17.8484L89.7623 17.928L90.092 18.0873L90.3422 18.1669L90.5923 18.3261L90.8424 18.4058L91.0926 18.565L91.2517 18.8153L91.5019 18.9746L91.752 19.2248L92.0021 19.4751L92.1613 19.7253L92.3773 19.987L92.5365 20.3169L92.7867 20.7264L93.0368 21.0563L93.196 21.4658L93.3551 21.955L93.6053 22.4441L93.7645 22.9333L93.9236 23.5021L94.0828 24.1619L94.242 24.7306V24.8103L93.9123 32.8415L93.9918 33.6605V34.0701V34.4V34.7298L93.9123 35.0597V35.3896L93.8327 35.6399L93.7531 35.8902V36.1404L93.6735 36.3907L93.5939 36.55L93.5143 36.8002L93.4347 36.9595L93.2756 37.1187L93.196 37.278L93.1164 37.4373L92.9572 37.5965L92.798 37.7558L92.6389 38.006L92.4797 38.1653L92.3205 38.3246L92.0704 38.4838L91.9112 38.6431L91.6611 38.8023L91.4109 38.9616L91.0812 39.1209L90.8311 39.3711L90.5013 39.5304L90.1716 39.6896L89.8419 39.8489L89.5122 40.0082L87.7953 40.338H86.9767V50.7809ZM74.2881 14.6632V71.0978L79.6887 72.5767V45.6164L85.3395 45.7756L86.9767 50.7695V40.3836L80.5073 40.1333L79.6887 39.974V18.9973L85.8284 17.5185H86.0785H86.5674H86.9767V12.0354C86.3173 12.0354 85.6692 12.0354 85.0098 12.115L74.2881 14.6632Z"
                    fill="#9A9A9A"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="72"
                  height="83"
                  viewBox="0 0 72 83"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.633789 41.1221L71.4864 41.1235V51.5593H0.633789V41.1221Z"
                    fill="#9A9A9A"
                  />
                  <path
                    d="M0.634766 51.546V61.8581L36.0013 82.2613L71.4846 61.8261V51.5293L0.634766 51.546Z"
                    fill="#848383"
                  />
                  <path
                    d="M8.81543 24.4202V23.7114C8.81543 22.9901 8.22508 22.412 7.50417 22.412C6.78325 22.412 6.20402 22.9971 6.20402 23.7184V30.6047V39.4533H0.699219V20.8151L22.4767 8.19043V39.4533H16.9191V19.0571C16.9191 18.3358 16.3288 17.759 15.6079 17.759C14.887 17.759 14.3105 18.3427 14.3105 19.064L14.3091 39.4533H8.81543V24.4202Z"
                    fill="#9A9A9A"
                  />
                  <path
                    d="M41.6537 3.60425L55.3483 11.5968V21.2196H49.813V14.457C49.813 13.7357 49.2351 13.1575 48.5142 13.1575C47.7933 13.1575 47.2155 13.6023 47.2155 14.3222V34.4377C47.2155 35.159 47.7947 35.7372 48.5156 35.7372C49.2365 35.7372 49.8158 35.1521 49.8158 34.4322L49.813 28.5034H55.3483L55.347 39.4534H41.6523L41.6537 3.60425Z"
                    fill="#9A9A9A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.2917 34.628V21.5252C33.2917 20.8039 32.6625 20.2272 31.9416 20.2272C31.2207 20.2272 30.6331 20.8095 30.6331 21.5308L30.6317 34.5821C30.6317 35.3034 31.2207 35.933 31.9416 35.933C32.6625 35.933 33.2917 35.3493 33.2917 34.628ZM25.1825 19.4656L33.2862 14.7209V9.59125C33.2292 8.92555 32.6264 8.42384 31.943 8.42384C31.222 8.42384 30.6428 9.00894 30.6428 9.73023L30.6442 12.4L25.1797 15.5019V6.75473L36.2004 0.40625L38.8174 1.91693L38.8187 39.4533H25.1811L25.1825 19.4656Z"
                    fill="#9A9A9A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M66.1759 34.8309V23.8781C66.1759 23.1568 65.5328 22.58 64.8118 22.58C64.0909 22.58 63.5423 23.1568 63.5423 23.8781L63.5409 34.8309C63.5409 35.5522 64.0895 36.1289 64.8104 36.1289C65.5314 36.1289 66.1759 35.5522 66.1759 34.8309ZM58.1152 13.156L71.5084 20.879V39.4533H58.1166L58.1152 13.156Z"
                    fill="#9A9A9A"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MainForm />
    </React.Fragment>
  );
}
