import React, { useEffect } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
//importing pages
import About from "./pages/About";
import Home from "./pages/Home";
import Legal from "./pages/Legal";
import Vaccine from "./pages/Vaccine";
import Thread from "./pages/Thread";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("UA-148968911-1");
    //to report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/about" component={About} />
      <Route exact={true} path="/legal" component={Legal} />
      <Route exact={true} path="/vaccine" component={Vaccine} />
      <Route exact={true} path="/thread/:id" component={Thread} />
    </Switch>
  );
};

export default App;
