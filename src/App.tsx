import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroductionPage from './modules/home';
import UserPage from './modules/user/user';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;