import React from 'react';
// import logo from './y.png';
import Menu from '../../Components/Menu/Menu';
import Ball from '../../Components/Menu/Balll/Ball';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Og from '../OSStr6/Og/Og';
import '../../App.css';



const OSStr6 = () => {
    return (
    <div className="App"> 
     <Header/>
     <div className='Menu'>
    <Menu/>
    <Ball/>
    </div>
    <Og/>
    <Footer/>
     </div>

        

        );
}

export default OSStr6;