import * as React from "react";
import "./App.scss";
import { MainPage } from "./components/MainPage";
// import { SquareWaves } from "./components/SquareWaves/index";

const App: React.FC = () => {
  return (
    <div className="App">
      <MainPage />
      {/* <SquareWaves /> */}
    </div>
  );
};

export default App;
