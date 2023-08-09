import React from 'react';
// import rightArrow from '../../assets/svgs/long_right.svg'
import './footer.css'

export default function Footer() {
  return (
    <footer className='footer-container'>
        <div className="footer-top">
            <h3>Tweakful</h3>
        </div>
        <div className="footer-middle">
            <div className="footer-middle-left">
                <h4>About Tweakful</h4>
                <p>Tweakful is HubSpot Theme Based On Engagement Design Framework, designed & developed by Openthrive.</p>
                <div className="footer-button-link">
                    <a href="/">Button Text</a>
                    {/* <img src={rightArrow} alt="" /> */}
                </div>
            </div>
            <div className="footer-middle-right">
                <ul>
                    <li>Contact</li>
                    <li>Career</li>
                    <li>Private Policy</li>
                    <li>Terms Of Service</li>
                    <li>GDPR</li>
                    <li>FAQs</li>
                </ul>
                <ul className='bottom-link'>
                    <li>Blog</li>
                    <li>Capabilities</li>
                    <li>Resources</li>
                    <li>Partnership Integrations</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                <p>B2B website and engagement design solution that transform marketing and sales performance like never before.</p>
            </div>
            <div className="footer-right">
                <p>© 2015-2020 Openthrive. All right reserved.</p>
            </div>
        </div>
    </footer>
  )
}
