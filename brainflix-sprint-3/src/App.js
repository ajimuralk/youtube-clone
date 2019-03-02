import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./front-end/components/Home";
import Upload from "./front-end/components/Upload";
import "./front-end/styles/App.css";
import "./front-end/styles/global.css";

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
