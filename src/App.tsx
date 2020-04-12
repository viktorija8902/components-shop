import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";
import Home from "./components/Home";
import Trenches from "./components/Trenches/Trenches";
import SquareWaves from "./components/SquareWaves/index";
import RingOfFire from "./components/RingOfFire/index";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div>
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
        </div>
      </Router>
    </div>
  );
};

export default App;
