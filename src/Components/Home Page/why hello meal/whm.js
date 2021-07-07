import React from 'react';
import Textsec from './Text sec/textsec'
import Card1 from './whm Cards/Card1/Card1'
import Card2 from './whm Cards/Card2/Card2'
import Card3 from './whm Cards/Card3/Card3'
import './whm.css'

function Whm () {
    return(
        <div>
            <Textsec />
            <div className="card-sec">
            <Card1 />
            <Card2 />
            <Card3 />
            </div>
        </div>
    );
}
export default Whm