import './App.css';

import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerLogin from './components/CustomerLogin';
// import Feature from './components/Feature';


const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/customerLogin' element={<CustomerLogin/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;

