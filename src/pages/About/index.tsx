import React from "react";
import { routeMain } from "./routes";

const About = () => {
    const image = require(`../../assets/images/about.png`)
    
    return (
        <section className="about">
            <div className="container">
                <div className="about__content">
                    <div className="about__left">
                        <picture className="about__image">
                            <img src={image} alt="Картинка"/>
                        </picture>
                    </div>
                    <div className="about__right">
                        <h3 className="about__title">MOVIESinfo</h3>
                        <p className="about__descr">Какое-то описание ради описания</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {routeMain}

export default About