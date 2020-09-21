import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Navigation from './Components/Header/Navigation';
import Landing from './Components/LandingPage/Landing';
import PoolList from './Components/Pool/PoolList';
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
      <Routes>
       
   <Route path='/' element={<Landing/>} />
   <Route path='/Pool' element={<PoolList/>} />

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
