import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./components/about.jsx";
import Gallery from "./components/gallery.jsx";
import Home from "./components/home.jsx";

function App() {
  return (
    <Fragment>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Pagina Principal</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
            <li>
              <Link to="/gallery">Galeria</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <footer>Hola soy un pie de pagina</footer>
    </Fragment>
  );
}

export default App;
