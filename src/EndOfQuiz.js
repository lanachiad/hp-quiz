import React, { Component } from 'react';
import './EndOfQuiz.css';

class EndOfQuiz extends Component {
  render() {
    let result;

    const percentCorrect = Math.round(this.props.finalScore / this.props.totalQuest * 10000) / 100;

    if (percentCorrect >= 90) {
      result = 'Impressive. You must be a Ravenclaw with smarts like that.';
    } else if (percentCorrect < 90 && percentCorrect >= 50) {
      result = "You could have done better...but you also could've done worse.";
    } else if (percentCorrect < 50 && percentCorrect >= 25) {
      result = 'Wit beyond measure is surely not your treasure.';
    } else {
      result = 'Did you even try the quiz?';
    }

    return (
      <div id="end-of-game" className="game-wrapper">
        <h2>Quills down, here's how you did</h2>
        <p>
          Final score: {this.props.finalScore}
        </p>
        <p>
          That's a {percentCorrect}% knowledge of all things Harry Potter.
        </p>
        <p>
          {result}
        </p>
      </div>
    );
  }
}

export default EndOfQuiz;
