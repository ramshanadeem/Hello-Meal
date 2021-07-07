import React from 'react';
import "./Howitworks.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import arrow from "./Tri1.png";
import Button from '@material-ui/core/Button';
function Howitworks() {
  return (
    <div className="howitworks-par">
      <div className="howitworks">
        <Typography className="heading">How it Works</Typography>
        <div className="howitworks-align">
          <div className="hiw-sec1">
            <Paper className="box1" variant="outlined">
              <Typography className="box1-content">1</Typography>
            </Paper>
            <div className="box1-text">
              <Typography className="text-heading">
                Freshly cooked meal
                <br />
                everyday
              </Typography>
              <Typography className="text-paragraph">
                Order from a curated menu from
                <br />
                top restaurants
              </Typography>
            </div>
          </div>
          <img className="arrow" src={arrow} />
          <div className="hiw-sec2">
            <Paper className="box2" variant="outlined">
              <Typography className="box2-content">2</Typography>
            </Paper>
            <div className="box2-text">
              <Typography className="text2-heading">Lunch Delivered</Typography>
              <Typography className="text2-paragraph">
                Your favorite restaurant delivers
                <br />
                freshly cooked hot lunch
              </Typography>
            </div>
          </div>
          <img className="arrow" src={arrow} />
          <div className="hiw-sec3">
            <Paper className="box3" variant="outlined">
              <Typography className="box3-content">3</Typography>
            </Paper>
            <div className="box3-text">
              <Typography className="text3-heading">
                Enjoy your lunch
              </Typography>
              <Typography className="text3-paragraph">
                Grab the lunch you ordered
                <br /> and enjoy eating!
              </Typography>
            </div>
          </div>
        </div>
        <div className="button">
          <Button className="join-us-today-btn" variant="contained" disableRipple>
          Join Us Today
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Howitworks;
