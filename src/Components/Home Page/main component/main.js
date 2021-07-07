import React from 'react';
import "./main.css";
import searchicon from './Search Icon.svg'
import Dish from './dsih1.png'
import { Typography } from "@material-ui/core";
import Input from './Input/Input'

function Main() {
  return (
    <div className="main-par">
      <div className="main">
        <div className="main-text">
          <Typography className="main-heading">
            Get Great Meals at
            <br />
            Greater Prices
          </Typography>
          <Typography className="main-paragraph">
            We don’t believe that to have a great meal you<br/> need to spend a
            fortune.
            <br />
            Get your favorite restaurant dishes at greater<br/> prices with no
            delivery charges ever.
            <br />
          </Typography>
          <div className="input-sec">
              <label>Where do you want us to get your food delivered?</label>
              <div className="location-sec">
                  <div className="input">
                      <input type="text" placeholder=" e.g  Qatar National Bank" />
                      <img className="search-icon" src={searchicon} />
                  </div>
              </div>
          </div>
        </div>
          <img className="dish-img" src={Dish} />
      </div>
    </div>
  );
}
export default Main;
