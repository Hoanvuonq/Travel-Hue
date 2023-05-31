import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Plan from './components/Plan/Plan';
import Home from './components/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Plan" element={<Plan />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
