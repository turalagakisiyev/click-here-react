import React, { Component } from 'react';

class App extends Component {
  state = {
    message : "Click here"
  }
  render() {
    return (
      <div>
        <button>{this.state.message}</button>
      </div>
    );
  }
}

export default App;