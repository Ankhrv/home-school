import React from 'react';
// import logo from './y.png';
import Menu from '../../Components/Menu/Menu';
import Ball from '../../Components/Menu/Balll/Ball';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Voprotv from './Voprotv/Voprotv';
import '../../App.css';



const OSStr4auth = () => {
    return (
    <div className="App"> 
     <Header/>
     <div className='Menu'>
    <Menu/>
    <Ball/>
    </div>
    <Voprotv/>
    <Footer/>
     </div>

        

        );
}

export default OSStr4auth;