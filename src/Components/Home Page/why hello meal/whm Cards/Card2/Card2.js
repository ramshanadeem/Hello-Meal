import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import './Card2.css'
import freedelivery from './free-delivery.png'

function Card2 () {
    return(
        <div className="card2-par">
            <Paper className="card2">
                <div className="img-div-par">
                    <div className="img-div">
                        <img src={freedelivery} />
                    </div>
                </div>
                <div className="card2-content">
                    <Typography className="cc-heading">Free Delivery</Typography>
                    <Typography className="cc-paragraph">Get lunch from your<br/> favorite restaurant at a<br/> discounted price every<br/> time.</Typography>
                </div>
            </Paper>
        </div>
    );
}
export default Card2