import './App.css';
import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import Loginpage from './components/Loginpage'; 



function App() {
  return (
    <BrowserRouter>
    <router>
    <Routes>
      <Route path = '/' element={<Homepage />} />
      <Route path = '/Login' element={<Loginpage />} />
      <Route path = '/Products' element={<Productpage />} />
    </Routes>
    </router>
    </BrowserRouter>
    
  );
}

export default App;
