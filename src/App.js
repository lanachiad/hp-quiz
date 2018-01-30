import React, { Component } from 'react';
import Welcome from './Welcome';
import GameLoop from './GameLoop';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      begin: false
    };
  }

  handleQuizStart = () => {
    this.setState({ begin: true });
  };

  render() {
    if (this.state.begin === true) {
      return <GameLoop />;
    } else {
      return <Welcome beginQuiz={this.handleQuizStart} />;
    }
  }
}

export default App;
