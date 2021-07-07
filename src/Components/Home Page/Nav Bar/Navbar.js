import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import Logo from './Logo.png'
import downarrow from './down arrow.svg'

function Navbar () {
    return(
        <div className="nav-par">
            <div className="nav">                                           
               <img className="logo" src={Logo} />
               <div className="links">
                   <p>TODO</p>
                  <NavLink exact className="link" to="/" activeClassName="underline">Home</NavLink>
                  <NavLink exact className="link" to="/menu" activeClassName="underline">Menu</NavLink>
                  <NavLink exact className="link" to="/restaurants" activeClassName="underline">Restaurants</NavLink>
                  <button className="account-btn"><span className="btn-content">Account<span><img className="btn-icon" src={downarrow} /></span></span></button>
               </div>                                   
            </div>
        </div>
    );
}
export default Navbar                           