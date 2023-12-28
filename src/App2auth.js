import './App.css';
import Header from './Components/Header/Header';
// import Main from './Components/Menu/Main/Main';
import Str1 from './Content/Str1/Str1';
import Str2 from './Content/Str2/Str2';
import Str3 from './Content/Str3/Str3';
import Str4 from './Content/Str4/Str4';
import Str5 from './Content/Str5/Str5';
import Menu from './Components/Menu/Menu';
import Ball from './Components/Menu/Balll/Ball';
import Footer from './Components/Footer/Footer';
import Userfront from "@userfront/core";
import { Routes, Route,  Navigate, useLocation, } from "react-router-dom";



function App2auth() {

  return (
    
    <div className="App"> 
   
    <Header/>
     <Str1/>
     <Str2/>
     <Str4/>
     <Str3/>
     <Str5/>
    <div className='Menu'>
    <Menu/>
    <Ball/>
    </div>
   <Footer/>
    </div>
 
  );
}

export default App2auth;