import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyLayout from '../layouts/EmptyLayout';

import Home from './Home';
import Plan from './Plan/Plan';
import Form from './Form';
import Blog from './Blog/Blog';
import Travel from './Travel/Travel';
import { routeAdmin } from './Admin/route';
import Propose from './Propose';

const pages = [Home, Plan, Form, Blog, Travel, Propose, ...routeAdmin];

const NextPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        {pages.map((Page, i) => {
          const { route, layout } = Page.options;
          const Layout = layout ?? EmptyLayout;
          return (
            <Route
              key={`${i}-${route}`}
              path={route}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
export default NextPages;
