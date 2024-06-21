import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import ContactPage from "./Pages/Homepage/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <ContactPage></ContactPage>
      </div>
    </BrowserRouter>
  );
}
export default App;
