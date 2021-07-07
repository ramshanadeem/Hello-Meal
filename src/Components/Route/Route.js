import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Home Page/Home/Home'
import Restaurant from '../Restaurant Page/Restaurant/Restaurant'
import Navbar from '../Home Page/Nav Bar/Navbar'
import Menu from '../Menu/Menu'
import React from 'react';

function Routes () {
    return(
        <div>
            <Router>
                <Navbar />
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/menu" component={Menu}/>
                <Route path="/restaurants" component={Restaurant}/>
                </Switch>
            </Router>
        </div>
    );
}
export default Routes