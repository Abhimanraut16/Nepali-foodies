import React from 'react'
import './footer.css'
import './media.css'
import { assets } from '../../assets/assets'

function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Choose from a diverse menu fearturing a delectable array of dishes crafed with the finest ingredients and culinary experties.Our mission is to satify your cravings and elevate your dining experience one delicious meal at a time.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="#">Privacy policy</a></li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li><a href="#">9824278289</a></li>
                        <li><a href="#">rautabhimanu59@gmail.com</a></li>
                    </ul>

                </div>
            </div>
            <hr />

            <p className='footer-copyright'>Copyright 2024 tomato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer