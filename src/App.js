import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Menu/Main/Main';
import Menu from './Components/Menu/Menu';
import Ball from './Components/Menu/Balll/Ball';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App"> 
    
    <Header/>
     <Main/>
    <div className='Menu'>
    <Menu/>
    <Ball/>
    </div>
   <Footer/>
    </div>
   
  );
}

export default App;
