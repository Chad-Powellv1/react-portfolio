import React from 'react';
import {
  BrowserRouter,
} from "react-router-dom";

import {Projects} from './pages/Projects';
import {Header} from './component/Header';
import {About} from './pages/About';
import {Home} from './pages/Home';
import {Contact} from './pages/Contact';
import './App.css';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}