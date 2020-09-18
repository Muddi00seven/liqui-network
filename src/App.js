import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Navigation from './Components/Header/Navigation';
import Landing from './Components/LandingPage/Landing';
import PoolList from './Components/Pool/PoolList';
// import Card from './Components/YieldCards/Card'
// import Nav from './Components/Header/navbar';
import Footer from './Components/Footer/Footer'
import {GlobalProvider2 } from './Components/Pool/GlobalContext/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <GlobalProvider2>
<>
<div>
<Router >
  
  <Navigation/>
    {/* <Nav/> */}
 <Routes>
       
   <Route path='/' element={<Landing/>} />
   <Route path='/Pool' element={<PoolList/>} />

  {/*   <Route path='/Card' element={<Card/>} />
   <Route path='/About' element={<About/>} /> */}

          </Routes>
        <Footer/>
      </Router >
</div>
</>
</GlobalProvider2>
</GlobalProvider>
  );
}

export default App;
