import React from "react";
import { HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Movies from "./containers/moveis";

const Routes = ()=>{
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Movies} />
      </Switch>
    </Router>
  );
}

export default Routes