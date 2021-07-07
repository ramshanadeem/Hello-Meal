import React from 'react';
import './Footer.css'
import Footerlogo from './footer-logo.png'
import Iconbutton from './footer-button'
import { Typography } from '@material-ui/core'

function Footer (){
    return(
        <div className="Footer-par">
            <div className="footer">
                <div className="footer-sec1">
                    <img className="footer-logo" src={Footerlogo} />
                    <Iconbutton />
                </div>
                <div className="footer-sec2">
                    <div className="About-sec">
                        <Typography className="about-head">About</Typography>
                        <Typography className="about-text">Privacy Policy</Typography>
                        <Typography className="about-text">Terms of Use</Typography>
                        <Typography className="about-text">FAQ</Typography>
                    </div>
                    <div className="Restaurants">
                          <Typography className="restaurant-head">Restaurants</Typography>
                    </div>
                    <div className="Contact Us">
                        <Typography className="contact-head">Contact Us</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer