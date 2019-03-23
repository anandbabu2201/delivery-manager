import React, { Component } from "react";
import DeliverSystem from "./components/Delivery/DeliverSystem";

import Header from "./components/layout/Header";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
          <div className="App">
            <Header />
            <div className="container">
              <DeliverSystem />
            </div>
          </div>
    );
  }
}

export default App;
