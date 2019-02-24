import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";
import "../styles/global.css";
import Home from "./Home";
import Upload from "./Upload";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/videos/:id" render={(props => {
            return <Home {...props} />
          })} />
          <Route path="/upload" component={Upload} />
        </Switch>
      </div>
    );
  }
}

export default App;
