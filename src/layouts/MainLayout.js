import * as React from 'react';
import Navbar from './partials/Navbar/Navbar';
import Footer from './partials/Footer/Footer';

const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  )
};

export default MainLayout;