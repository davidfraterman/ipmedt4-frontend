import React, { lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import * as ROUTES from "./constants/routes";

import Header from "./components/layout/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Auth";
// import Map from "./pages/Map/Map";
import Todo from "./pages/Todo/Todo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          {/* <Route path={ROUTES.KAART} element={<Map />} /> */}
          <Route path={ROUTES.TODO} element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;