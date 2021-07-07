import React from 'react';
import { Typography } from '@material-ui/core'
import './textsec.css'

function textsec () {
    return (
        <div className="textsec-par">
            <div className="textsec">
                <Typography className="text-sech">Why HelloMeal?</Typography>
                <Typography className="text-secp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor porttitor a ullamcorper.<br/> Ultricies erat quis a, eget molestie facilisis massa adipiscing nulla.</Typography>
            </div> 
        </div>
    )
}
export default textsec