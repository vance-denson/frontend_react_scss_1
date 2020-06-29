import React from "react";
import { Switch, Route } from "react-router-dom"
import "./defaults.scss";
//layouts
import MainLayout from "./layouts/MainLayout"
//pages
import About from "./pages/About"
import Skills from "./pages/Skills"
import Resume from "./pages/Resume"


function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route exact path="/" render={() => (
          <LandingLayout>
            <Landing />
          </LandingLayout>
        )}
      </Switch> */}
      <Switch>
        <Route exact path="/about" render={() => (
          <MainLayout>
            <About />
          </MainLayout>
        )} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
      {/* </div> */}
    </div>);
}

export default App;
