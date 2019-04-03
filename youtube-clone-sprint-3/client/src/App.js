import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Upload from "./components/Upload";
import "./styles/global.css";

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
