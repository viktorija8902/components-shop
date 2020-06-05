import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import "./App.scss";
const Home = lazy(() => import("./components/Home"));
const Trenches = lazy(() => import("./components/Trenches/Trenches"));
const SquareWaves = lazy(() => import("./components/SquareWaves/index"));
const RingOfFire = lazy(() => import("./components/RingOfFire/index"));

const App = () => {
  return (
    <Router>
      <Menu />
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
