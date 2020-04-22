import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";
const Home = lazy(() => import("./components/Home"));
const Trenches = lazy(() => import("./components/Trenches/Trenches"));
const SquareWaves = lazy(() => import("./components/SquareWaves/index"));
const RingOfFire = lazy(() => import("./components/RingOfFire/index"));

const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/trenches">Deepest trenches</Link>
        </li>
        <li>
          <Link to="/ring-of-fire">Ring of fire</Link>
        </li>
        <li>
          <Link to="/square-waves">Square waves</Link>
        </li>
      </ul>
      {/* todo add error boundary */}
      <Suspense fallback={<div>Preparing data...</div>}>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/trenches">
            <Trenches />
          </Route>
          <Route path="/ring-of-fire">
            <RingOfFire />
          </Route>
          <Route path="/square-waves">
            <SquareWaves />
          </Route>
          {/* <Route path="*">
            <NotFound />
          </Route> */}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
