import React from 'react'

import Main from '../Main/Main';
import HeaderHome from '../HeaderHome/HeaderHome';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeaderHome/>
      <Main/>
      <Footer/>
    </>
  )
}

export default Home