import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Pricing from './Pages/Pricing';
import Testimonials from './Pages/Testimonials';
import Login from './Pages/Login';
import './index.css';
import App from './App';







ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/Login' element={<Login />} />
    </Routes>
  </Router>,
 
  document.getElementById('root')
);


