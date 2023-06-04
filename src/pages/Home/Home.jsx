import React from 'react';

import MainLayout from '../../layouts/MainLayout';
import { routes } from '../../utils/routes';
import CarouselSection from '../../components/modules/home/CarouselSection';
import SpecialTourSection from '../../components/modules/home/SpecialTourSection';

const Home = () => {
  return (
    <>
      <CarouselSection />
      <SpecialTourSection />
    </>
  );
};

Home.options = {
  layout: MainLayout,
  route: routes.HOME,
};

export default Home;
