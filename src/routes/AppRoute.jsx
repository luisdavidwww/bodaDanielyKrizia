import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Paginas
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Router>
            <div style={{ display: 'block' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
  )
}

export default AppRoutes;