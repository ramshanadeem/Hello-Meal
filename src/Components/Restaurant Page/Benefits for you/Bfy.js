import React from 'react';
import { Paper } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import './Bfy.css'

function Bfy (props) {
    return(
        <div className="bfy-par" >
            <Paper  style={{border: props.border, borderRadius: props.borderradius, boxShadow: props.boxshadow,backgroundColor: props.backgroundcardcolor}}  className="bfy-cardp" elevation="0">
                <div className="bfy-card">
                <div style={{backgroundColor: props.backgroundcolor}} className="bfycard-img">
                    <img src={props.img} />
                </div>
                <Typography style={{color: props.headcolor}}  className="bfyhead">{props.bfyheading}</Typography>
                <Typography className="bfytext">{props.bfytext}</Typography>
                </div>
            </Paper>
        </div>
    );
}
export default Bfy