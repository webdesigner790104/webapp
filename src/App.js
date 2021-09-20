import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

class App extends Component{
  render(){
    return(
      <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path={"/dashboard"}> 
        <Dashboard/>
        </Route>
        </Switch>
      </Router>
      
       
        
       
      </div>
    
    )
  }
}
export default App;
