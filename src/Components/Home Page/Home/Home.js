import React from 'react';
import './Home.css'
import Main from '../main component/main'
import Lunch from '../Lunch Menu section/Lunchmenusec'
import Whm from '../why hello meal/whm'
import Howitworks from '../How it works/Howitworks'
import Animacard1 from '../Animation Cards/Animationcard1/Animcard1'
import Restaurantimg from '../Animation Cards/Animationcard1/Restaurant Animation.png'
import Partnerimg from '../Animation Cards/Animationcard1/Partner Animation.png'
import Footer from '../../Footer/Footer'

function Home () {
    return(
        <div className="home">
            <Main />
            <Lunch />
            <Whm />
            <Howitworks />
            <div className="animationcards">
                <Animacard1 color="#FF3008" img={Restaurantimg}  heading="Restaurant" paragrapgh="Get lunch from your favorite restaurant at a discounted price every time." />
                <Animacard1 color="#4C302C" img={Partnerimg}  heading="
                Partner with us" paragrapgh="Get lunch from your favorite restaurant at a discounted price every time." />
            </div>
            <Footer />
        </div>
    );
}
export default Home