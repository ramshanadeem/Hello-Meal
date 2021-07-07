import React from "react";
import "./Restaurant.css";
import Uppersec from "../Upper sec/Uppersec";
import Bfycard from "../Benefits for you/Bfy";
import earn from "./earn.png";
import customericon from "./Customer-icon.png";
import vector from "./Vector (1).png";
import { Button, Typography } from "@material-ui/core";
import registerimg from "./Group.png";
import bulkimg from "./Group 922.png";
import deliveryourorderimg from './deliver-your-ordrer-icon.png'
import Footer from "../../Footer/Footer"
function Restaurant() {
  return (
    <div className="restaurant-par">
      <div className="restaurant">
        <Uppersec />
      </div>
      <div className="bfy-cards-par">
        <Typography className="bfysec-head">Benefits for you</Typography>
        <div className="bfy-cards">
          <Bfycard
            img={earn}
            backgroundcolor="rgba(76, 48, 44, 0.07)"
            bfyheading="Earn Revenue during downtime"
            bfytext="We facilitate you to earn additional money at your idle time."
            headcolor="#4C302C"
            border="none"
            backgroundcardcolor="transparent"
          />
          <Bfycard
            img={bulkimg}
            backgroundcolor="#FFE9E5"
            bfyheading="Earn Revenue during downtime"
            bfytext="We facilitate you to earn additional money at your idle time."
            headcolor="#4C302C"
            border="1px solid white"
            borderradius="2vw"
            boxshadow="0px 2px 49px rgba(255, 48, 8, 0.2)"
            backgroundcardcolor="transparent"
          />
          <Bfycard
            img={vector}
            backgroundcolor="rgba(76, 48, 44, 0.07)"
            bfyheading="Earn Revenue during downtime"
            bfytext="We facilitate you to earn additional money at your idle time."
            headcolor="#4C302C"
            border="none"
            backgroundcardcolor="transparent"
          />
        </div>
        <div className="gs-btn-par">
          <Button className="gs-btn">Get Started</Button>
        </div>
      </div>
      <div className="howitwork-par">
        <div className="howitwork">
          <div className="howitwork-text">
            <Typography className="howitwork-heading">How It Work</Typography>
            <Typography className="howitwork-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor
              porttitor a<br /> ullamcorper. Ultricies erat quis a, eget
              molestie facilisis massa adipiscing nulla.
            </Typography>
          </div>
          <div className="howitwork-cardsec">
            <Bfycard
              img={registerimg}
              backgroundcolor="#FFE9E5"
              bfyheading="Get Registered"
              bfytext="Sign up the form to get registered"
              headcolor="#4C302C"
              border="none"
              backgroundcardcolor="transparent"
            />
            <Bfycard
              img={customericon}
              backgroundcolor="#FFE9E5"
              bfyheading="Receive Bulk orders"
              bfytext="Receive bulk orders from corporate employees at your restaurant downtime"
              headcolor="#FF3008"
              border="1px solid white"
              borderradius="2vw"
              boxshadow="0px 2px 49px rgba(255, 48, 8, 0.2)"
              backgroundcardcolor="white"
            />
            <Bfycard
              img={deliveryourorderimg}
              backgroundcolor="#FFE9E5"
              bfyheading="Deliver your order"
              bfytext="Deliver the bulk order to corporate offices"
              headcolor="#4C302C"
              border="none"
              backgroundcardcolor="transparent"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Restaurant;
