import React from 'react';
import { Typography } from '@material-ui/core'
import './Uppersec.css'
import Button from '@material-ui/core/Button';

function Uppersec() {
    return(
        <div className="uppersec-par">
            <div className="uppersec">
                <Typography className="us-head">Make Money during your<br/> restaurant downtime</Typography>
                <Typography className="us-text">Generate revenue during your off-hours and grow your<br/> business with HelloMeal.</Typography>
              <div className="us-btn-par">
              <Button className="us-btn" variant="contained">
                 Get Started
              </Button>
              </div>
            </div>
        </div>
    );
}
export default Uppersec