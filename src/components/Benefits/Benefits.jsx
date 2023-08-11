import React from 'react'
import './benefits.css'
import Benefit1 from '../../assets/svgs/benefit1.svg'
import Benefit2 from '../../assets/svgs/benefit2.svg'
import Benefit3 from '../../assets/svgs/benefit3.svg'

export default function Benefits() {
    return (
        <section className='benefits-container'>
            <h2>Benefits of working with us</h2>
            <div className="benefit-list">
                <div className="benefit">
                    <div className="benefit-icon">
                        <img src={Benefit1} alt='' />
                    </div>
                    <div className="benefit-text">
                        <h4>Time zones aint no thing</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                    </div>
                </div>
                <div className="benefit">
                    <div className="benefit-icon">
                        <img src={Benefit1} alt='' />
                    </div>
                    <div className="benefit-text">
                        <h4>Time zones aint no thing</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                    </div>
                </div>
                <div className="benefit">
                    <div className="benefit-icon">
                        <img src={Benefit2} alt='' />
                    </div>
                    <div className="benefit-text">
                        <h4>Time zones aint no thing</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                    </div>
                </div>
                <div className="benefit">
                    <div className="benefit-icon">
                        <img src={Benefit3} alt='' />
                    </div>
                    <div className="benefit-text">
                        <h4>Time zones aint no thing</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
