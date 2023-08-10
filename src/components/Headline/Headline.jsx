import React from 'react'
import './headline.css'
import Menu from '../../assets/svgs/Grid.svg'
import Star from '../../assets/svgs/Grid2.svg'
import Academy from '../../assets/svgs/Grid3.svg'

export default function Headline() {
    return (
        <section className='headline-container'>
            <div className="headline-left">
                <div className="headline">
                    <div className="headline-start">
                        <img src={Menu} alt='' />
                    </div>
                    <div className="headline-end">
                        <h4>First Benefit</h4>
                        <p>Gorgeous, high-quality design system for mobile, tablet & desktop devices a few </p>
                    </div>
                </div>
                <div className="headline">
                    <div className="headline-start">
                        <img src={Star} alt='' />
                    </div>
                    <div className="headline-end">
                        <h4>Second Benefit</h4>
                        <p>Gorgeous, high-quality design system for mobile, tablet & desktop devices a few </p>
                    </div>
                </div>
                <div className="headline">
                    <div className="headline-start">
                        <img src={Academy} alt='' />
                    </div>
                    <div className="headline-end">
                        <h4>Third Benefit</h4>
                        <p>Gorgeous, high-quality design system for mobile, tablet & desktop devices a few </p>
                    </div>
                </div>
            </div>
            <div className="headline-right">
                <h2>Headline of Modern and Digital Lending Platform Seconds</h2>
                <p>Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy</p>
                <div className="headline-button">
                    <a href="">Learn More About</a>
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>
            </div>
        </section>
    )
}
