
import './App.css';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Home from './component/Home';
import {Routes, Route} from 'react-router-dom';
import Code from './component/Code';
import AboutSection from './component/AboutSection';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<div><Home/></div>}/>
        <Route path='/try' element={<Code/>}/>
        <Route path='*' element={<div>hello</div>}/>

       
      </Routes>
      <Footer></Footer>
      
      
    </div>
  );
}

export default App;
