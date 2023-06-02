import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyLayout from "../layouts/EmptyLayout";

import Home from "./Home";
import Plan from "./Plan/Plan";
import Form from "./Form";

const pages = [Home, Plan, Form]

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
export default NextPages