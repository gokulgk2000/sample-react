import './App.css';
import { Route, Routes } from 'react-router-dom';

import React from 'react';
import HomePage from './homePage';
import SupportPage from './support';
const  App = () =>  {
  return (
   <div>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/support' element={<SupportPage />} />
    </Routes>
   </div>
  );
} 

export default App;
