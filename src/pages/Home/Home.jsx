import React from 'react';

import MainLayout from '../../layouts/MainLayout';
import { routes } from '../../utils/routes';
import CarouselSection from '../../components/modules/home/CarouselSection';
import SpecialTourSection from '../../components/modules/home/SpecialTourSection';
import Main from '../../components/modules/home/Main/Main';
import Item from '../../components/modules/home/Item/Item';
import NoteTravelSection from '../../components/modules/home/NoteTravelSection';
import DestinationSection from '../../components/modules/home/DestinationSection';

const Home = () => {
  return (
    <>
      <CarouselSection />
      <Item />
      <Main />
      <SpecialTourSection />
      <NoteTravelSection />
      <DestinationSection />
    </>
  );
};

Home.options = {
  layout: MainLayout,
  route: routes.HOME,
};

export default Home;
