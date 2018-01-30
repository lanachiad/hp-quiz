import React, { Component } from 'react';
import Welcome from './Welcome';
import GameLoop from './GameLoop';
import EndOfQuiz from './EndOfQuiz';
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

  handleQuizEnd = () => {
    this.setState({ begin: 'end' });
  };

  render() {
    if (this.state.begin === true) {
      return <GameLoop />;
    } else if (this.state.begin === false) {
      return <Welcome beginQuiz={this.handleQuizStart} />;
    } else {
      return <EndOfQuiz endQuiz={this.handleQuizEnd} />;
    }
  }
}

export default App;
