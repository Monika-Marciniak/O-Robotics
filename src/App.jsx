import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
      </div>
    </BrowserRouter>
  );
}
export default App;
