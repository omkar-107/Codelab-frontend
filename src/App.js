
import './App.css';
import React from 'react';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Home from './component/Home';
import {Routes, Route} from 'react-router-dom';
import Code from './component/Code';
import Login from './component/Login';
import Logout from './component/Logout';



function App() {
 
 
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<div><Home/></div>}/>
        <Route path='/try' element={<div><Code/> </div>}/>
        <Route path='/login' element={<div><Login/></div>}/>
        <Route path='/logout' element={<div><Logout/></div>}/>
        <Route path='*' element={<div>hello</div>}/>

       
      </Routes>
      <Footer></Footer>
    
      
      
    </div>
  );
}

export default App;
