import './hero.css'
import React from 'react'
import HeroImg from '../../assets/svgs/hero-img.png'

export default function Hero() {
    return (
        <section className='hero-container'>
            <div className="hero-left">
                <h1>This headline is the gist of the Your whole Website </h1>
                <p>And the description of hero section is follow up message after the punch of a great headline. So, make it short, simple, descriptive and to the point.</p>
                <div className="book-meeting-button">
                    <a href="">Book A Meeting</a>
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>
            </div>
            <div className="hero-right">
                <img src={HeroImg} alt='' />
            </div>
        </section>
    )
}
