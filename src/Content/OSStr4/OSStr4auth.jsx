import React from 'react';
// import logo from './y.png';
import Menuauth from '../../Components/Menu/Menuauth';
import Ball from '../../Components/Menu/Balll/Ball';
import Footerauth from '../../Components/Footer/Footer';
import Headerauth from '../../Components/Header/Headerauth';
import Voprotv from './Voprotv/Voprotv';
import '../../App.css';



const OSStr4auth = () => {
    return (
    <div className="App"> 
     <Headerauth/>
     <div className='Menu'>
    <Menuauth/>
    <Ball/>
    </div>
    <Voprotv/>
    <Footerauth/>
     </div>

        

        );
}

export default OSStr4auth;