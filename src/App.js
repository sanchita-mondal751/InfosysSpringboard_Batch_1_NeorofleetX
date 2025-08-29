import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles/App.css';

// Layout with Navbar + Footer
function LayoutWithFooter() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This renders the nested route */}
      <Footer />
    </>
  );
}

// Layout with only Navbar (no Footer)
function LayoutWithoutFooter() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Routes with Footer */}
      <Route element={<LayoutWithFooter />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Routes without Footer */}
      <Route element={<LayoutWithoutFooter />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
