/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home, { LeftComponent, RightComponent } from "./components/Home";
import Page from "./components/Page";
import ContactUs from "./components/ContactUs";
import About from "./components/About";

function App() {
  function Headerss() {
    return (
      <div className="d-flex gap-3 justify-content-center">
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

  return (
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
