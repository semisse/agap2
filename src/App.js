import React, { Component } from 'react';
import Routes from './routes'
//IMPORTING STYLES
import 'bootstrap/dist/css/bootstrap.min.css';

//ADD ROUTES TO NAVIGATE THROUGH THE APP
class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
