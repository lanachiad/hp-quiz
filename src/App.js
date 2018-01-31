import React, { Component } from 'react';
import Welcome from './Welcome';
import GameLoop from './GameLoop';
import EndOfQuiz from './EndOfQuiz';
import AllQuestions from './data/all_questions.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      begin: false,
      finalScore: 0,
      totalNumQuestions: AllQuestions.length
    };
  }

  handleQuizStart = () => {
    this.setState({ begin: true });
  };

  handleQuizEnd = score => {
    this.setState({ begin: 'end' }, () => {
      this.handleFinalScore(score);
    });
  };

  handleFinalScore = score => {
    this.setState({ finalScore: score });
  };

  render() {
    if (this.state.begin === true) {
      return <GameLoop endQuiz={this.handleQuizEnd} />;
    } else if (this.state.begin === false) {
      return <Welcome beginQuiz={this.handleQuizStart} />;
    } else {
      return (
        <EndOfQuiz
          summary={this.handleFinalScore}
          finalScore={this.state.finalScore}
          totalQuest={this.state.totalNumQuestions}
        />
      );
    }
  }
}

export default App;
