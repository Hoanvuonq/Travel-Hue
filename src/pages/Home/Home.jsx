import React from 'react'

import Main from '../../components/modules/home/Main/Main';

import MainLayout from '../../layouts/MainLayout';
import { routes } from '../../utils/routes';
import HeaderHome from '../../components/modules/home/HeaderHome/HeaderHome';

const Home = () => {
  return (
    <>
      <HeaderHome />
      <Main/>
    </>
  )
}

Home.options = {
  layout: MainLayout,
  route: routes.HOME
}

export default Home
