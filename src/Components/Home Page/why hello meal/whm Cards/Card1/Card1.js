import React from 'react'
import { Typography } from '@material-ui/core'
import './Card1.css'
import Cardimg from './cardimg1.png'

function Card1()  {
    return (
        <div className="card1-par">
            <div className="card1">
                <div className="img-par">
                <div className="img">
                    <img src={Cardimg} />
                </div>
                </div>
                <div className="card1-content-par">
                <div className="card1-content">
                    <Typography className="cc1-heading">Different Restaurants<br/>Different Menu</Typography>
                    <Typography className="cc1-paragraph">No more boring same menu<br/> every day. We ensure you get a<br/> different lunch menu every time<br/> you order from your favorite<br/> restaurants.</Typography>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card1
