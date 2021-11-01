import React from 'react'
import AboutItem from '../Components/AboutItem'



export default function About(){
    return(
        <>
        <section>
            <div className="container">
                <div className="about__title">
                    <h2>ТОВ «Мрія забудовника» – 23 роки успішного досвіду на ринку металопластикових конструкцій.</h2>
                    <p>За цей час компанія зарекомендувала себе як надійний і стабільно зростаючий виробник металопластикових конструкцій, заробила бездоганну репутацію і найголовніше – визнання клієнтів.</p>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="about__flex">
                   <AboutItem />
                </div>
            </div>
        </section>
        </>
    )
}