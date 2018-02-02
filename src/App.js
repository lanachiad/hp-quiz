import React, { Component } from 'react';
import Welcome from './Welcome';
import GameLoop from './GameLoop';
import EndOfQuiz from './EndOfQuiz';
import AllQuestions from './data/all_questions.js';
import './Universal.css';
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

  componentDidMount() {
    this.floatingCandles();
  }

  floatingCandles = () => {
    let leftCandle = document.getElementById('left-candle');
    let rightCandle = document.getElementById('right-candle');

    setInterval(function() {
      leftCandle.classList.toggle('candle-height');
    }, 1300);

    setInterval(function() {
      rightCandle.classList.toggle('candle-height');
    }, 1200);
  };

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
      return (
        <div className="wrapper">
          <div id="left-candle" className="candle left">
            <div className="flame" />
            <div className="wax" />
          </div>
          <GameLoop endQuiz={this.handleQuizEnd} />
          <div id="right-candle" className="candle right">
            <div className="flame" />
            <div className="wax" />
          </div>
        </div>
      );
    } else if (this.state.begin === false) {
      return (
        <div className="wrapper">
          <div id="left-candle" className="candle left">
            <div className="flame" />
            <div className="wax" />
          </div>
          <Welcome beginQuiz={this.handleQuizStart} />
          <div id="right-candle" className="candle right">
            <div className="flame" />
            <div className="wax" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <div id="left-candle" className="candle left">
            <div className="flame" />
            <div className="wax" />
          </div>
          <EndOfQuiz
            summary={this.handleFinalScore}
            finalScore={this.state.finalScore}
            totalQuest={this.state.totalNumQuestions}
          />
          <div id="right-candle" className="candle right">
            <div className="flame" />
            <div className="wax" />
          </div>
        </div>
      );
    }
  }
}

export default App;
