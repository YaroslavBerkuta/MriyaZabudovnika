import React from 'react'
import MainForm from '../Components/MainForm'

export default function Service(){
    return (
        <React.Fragment>
            <section className="service">
                <div className="container">
                    <h2 className="title">Послуги</h2>
                    <div className="service__flex">
                        <div className="service__item">
                            <img src="./assets/img/scale.svg" alt=""/>
                            <div className="service__info">
                                <h3>Заміри</h3>
                                <p>Не следует, однако, забывать, что синтетическое тестирование предопределяет высокую востребованность соответствующих</p>
                            </div>
                        </div>
                        <div className="service__item">
                            <img src="./assets/img/keys.svg" alt=""/>
                            <div className="service__info">
                                <h3>Прорахунок</h3>
                                <p>Не следует, однако, забывать, что синтетическое тестирование предопределяет высокую востребованность соответствующих</p>
                            </div>
                        </div>
                        <div className="service__item">
                            <img src="./assets/img/truck.svg" alt=""/>
                            <div className="service__info">
                                <h3>Доставка</h3>
                                <p>Не следует, однако, забывать, что синтетическое тестирование предопределяет высокую востребованность соответствующих</p>
                            </div>
                        </div>
                        <div className="service__item">
                            <img src="./assets/img/tool.svg" alt=""/>
                            <div className="service__info">
                                <h3>Монтаж</h3>
                                <p>Не следует, однако, забывать, что синтетическое тестирование предопределяет высокую востребованность соответствующих</p>
                            </div>
                        </div>
                        <div className="service__item">
                            <img src="./assets/img/awardService.svg" alt=""/>
                            <div className="service__info">
                                <h3>Заміри</h3>
                                <p>Не следует, однако, забывать, что синтетическое тестирование предопределяет высокую востребованность соответствующих</p>
                            </div>
                        </div>
                        <div className="service__item">
                            <img src="./assets/img/fileText.svg" alt=""/>
                            <div className="service__info">
                                <h3>Проекта докмуентація</h3>
                                <p>Не следует, однако, забывать, что синтетическое тестирование предопределяет высокую востребованность соответствующих</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
            <MainForm/>
        </React.Fragment>
    )
}