import React from 'react';
import { Typography } from '@material-ui/core';
import './Card3.css'
import discounticon from './discount-icon.png'

function Card3 () {
    return(
        <div className="card3-par">
            <div className="card3">
            <div className="img3-div-par">
                    <div className="img3-div">
                        <img src={discounticon} />
                    </div>
                </div>
                <div className="card3-content">
                    <Typography className="cc3-heading">Discounted Price</Typography>
                    <Typography className="cc3-paragragh">ave on your delivery fee.<br/> We deliver your lunch for<br/> free, forever.</Typography>
                </div>
            </div>
        </div>
    );
}
export default Card3