/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home, { LeftComponent, RightComponent } from "./components/Home";
import Page from "./components/Page";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import { createContext } from "react";

export const context = createContext();
function App() {
  function Headerss() {
    return (
      <div className="d-flex gap-3 mt-3 justify-content-center">
        <Link to="/">
          <button className="btn btn-primary">H</button>
        </Link>
        <Link to="contact">
          <button className="btn btn-primary">C</button>
        </Link>
        <Link to="about">
          <button className="btn btn-primary">A</button>
        </Link>
        <Link to="page">
          <button className="btn btn-primary">P</button>
        </Link>
      </div>
    );
  }

  const ProductDetail = {
    id: 1,
    title: "List Of products",
    price: "1200$",
    category: "Personal",
    description: "Travel bag",
  };

  return (
    <context.Provider value={ProductDetail}>
      <div className="App">
        <BrowserRouter>
          <Headerss />
          <Routes>
            <Route
              path="/"
              element={<Home />}>
              <Route
                path="left"
                element={<LeftComponent />}
              />
              <Route
                path="right"
                element={<RightComponent />}
              />
            </Route>
            <Route
              path="/page/:id/:index"
              element={<Page />}></Route>
            <Route
              path="/contact"
              element={<ContactUs />}></Route>
            <Route
              path="/about"
              element={<About />}></Route>
            <Route
              path="*"
              element={<ErrorPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </context.Provider>
  );
}

export default App;
