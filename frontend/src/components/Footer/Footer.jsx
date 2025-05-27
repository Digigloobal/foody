import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
import { useState } from 'react'

const Footer = () => {

  const [menu,setMenu] = useState("home");
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            {/* <img src={assets.logo} alt="" /> */}
            <img className='logo' src={assets.logo4} alt="" />
            <p>Savor the Flavor" is a vibrant food website offering delicious recipes, cooking tips, restaurant reviews, and mouthwatering food blogs. Whether you're a home cook or a foodie explorer, find inspiration for every meal and discover the joy of cooking and dining like never before.</p>
            <div className="footer-social-icons">
                <a href="https://www.facebook.com/manjeet.phogat.771/" target='_blank'><img src={assets.facebook_icon} alt="" /></a>
                <a href="#"><img src={assets.twitter_icon} alt="" /></a>
                <a href="https://www.linkedin.com/in/manjeet-phogat-82a59a254" target="_blank"><img src={assets.linkedin_icon} alt="" /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@foodify.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Foodify.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
