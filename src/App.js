
import './App.css';
import React from 'react';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
import Code from './component/Code';
import Login from './component/Login';
import Logout from './component/Logout';
import Notfound from './extra/Notfound';
import AboutUs from './component/AboutUs'
import Privateroute from './extra/Privateroute';
import Dashboard from './component/Dashboard';
import Adminprivateroute from './extra/Adminprivateroute'
import Adduser from './extra/Adduser' 
import Addtoclass from './extra/Addtoclass'
import Exam from './extra/Exam';


function App() {


  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<div><Home /></div>} />
        <Route path='/try' element={<div><Code /> </div>} />
        <Route path='/login' element={<div><Login /></div>} />
        <Route path='/logout' element={<div><Logout /></div>} />
        <Route path='/about' element={<div><AboutUs /></div>} />
        <Route path='/dashboard' element={<Privateroute><Dashboard/></Privateroute>}/>
        <Route path='/dashboard/add' element={<Adminprivateroute><Adduser></Adduser></Adminprivateroute>}/>
        <Route path='/dashboard/addtoclass' element={<Adminprivateroute><Addtoclass/></Adminprivateroute>}/>
        <Route path='/dashboard/exam' element={<Adminprivateroute><Exam/></Adminprivateroute>}/>
        <Route path='*' element={<Notfound />} />


      </Routes>
      <Footer></Footer>



    </div>
  );
}

export default App;
