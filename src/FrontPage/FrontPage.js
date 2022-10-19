import React from 'react'
import './FrontPage.css';
import HeroImage from './asset/hero.svg'
import {Link} from 'react-router-dom';
 const FrontPage = () => {
    return (
        <div className="main_container">
        <div className="Hero-container">

            <div className="hero-text">
                <h1 className="company_name">Notify</h1>
                <h1>Lorem Ipsum dolor sit amet</h1>
                <Link to="/signin"><button className="hero-button">Get started</button></Link>
            </div>
            <div>
                <img className="hero-image" src={HeroImage} alt="hero"></img>
            </div>
        </div>
        </div>
    )
}
export default FrontPage;