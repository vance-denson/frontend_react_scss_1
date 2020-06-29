import React from "react";
import Header from "./components/Header";
import About from "./pages/About"
import SocialLinks from "./components/SocialLinks"
import "./defaults.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <SocialLinks />
      <div className="main">
        <About />
      </div>
    </div>);
}

export default App;
