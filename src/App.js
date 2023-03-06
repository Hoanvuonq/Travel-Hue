import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <Navbar />
    <Home/>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
