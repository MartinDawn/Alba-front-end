import React from 'react';

import Home from './modules/auth/home';
import PolicyPage from './modules/auth/policy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import UserHome from "./modules/user/home";
function App() {
  return (
    <Router>
      <Routes>
        {/* auth */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/policy" element={<PolicyPage />} />
        {/* user */}
        <Route path="/user/home" element={<UserHome />} />
      </Routes>
    </Router>

  );
}

export default App;