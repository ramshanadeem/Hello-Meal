import { Typography } from '@material-ui/core'
import React from 'react'
import lunch from './lunch.png'
import './Lunchmenusec.css'
import Button from '@material-ui/core/Button';

export const Lunchmenusec = () => {
    return (
        <div className="lunch-menu-par"> 
          <div className="lunch-menu">
              <img className="lunch-img" src={lunch} />
              <div className="drdm-par">
                  <div className="drdm">
                      <Typography className="lunch-heading">Different Restaurants<br/>Different Menu</Typography>
                      <Typography className="lunch-text">Bringing lunch to work every day can be a<br/> challenge and hassle too. To eliminate these<br/> pain points, we have created HelloMeal: the<br/> hassle-free lunch delivery service that brings<br/> the best lunches from your favorite local<br/> restaurants directly to your office without any<br/> DELIVERY fee.</Typography>
                      <Typography className="p">No more same menu from the same chef<br/> every day!</Typography>
                      <Button className="our-menu">Our Menu</Button>
                  </div>
              </div>
          </div>
        </div>
    )
}
export default Lunchmenusec