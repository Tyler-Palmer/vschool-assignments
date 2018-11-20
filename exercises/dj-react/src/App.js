import React, { Component } from 'react';
import Square from './Square'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div class ="controlButtons">

          </div>
          <Square />
          <Square />
          <Square />
          <Square />
      </div>
    );
  }
}

export default App;
