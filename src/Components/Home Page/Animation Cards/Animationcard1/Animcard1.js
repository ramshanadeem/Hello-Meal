import React from 'react';
import './Animcard1.css'
import Paper from "@material-ui/core/Paper";
import { Typography } from '@material-ui/core';

function Animcard1 (props) {
    return(
        <div className="Animcard1-par">
            <div className="Animcard1">
                <Paper className="animationcard" variant="outlined">
                    <img className="animationimg" src={props.img} />
                </Paper>
                <div className="Animationcardtext-sec">
                    <Typography style={{color: props.color}} className="acard-head">{props.heading}</Typography>
                    <Typography className="acard-paragraph">{props.paragrapgh}</Typography>
                </div>
            </div>
        </div>
    );
}
export default Animcard1