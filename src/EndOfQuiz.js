import React, { Component } from 'react';
import './EndOfQuiz.css';
import SortingHat from './images/sorting_hat.png';

class EndOfQuiz extends Component {
  render() {
    let grade, result;

    const percentCorrect = Math.round(this.props.finalScore / this.props.totalQuest * 10000) / 100;

    if (percentCorrect >= 90) {
      grade = 'Outstanding';
    } else if (percentCorrect < 90 && percentCorrect >= 80) {
      grade = 'Exceeds Expectations';
    } else if (percentCorrect < 80 && percentCorrect >= 70) {
      grade = 'Acceptable';
    } else if (percentCorrect < 70 && percentCorrect >= 60) {
      grade = 'Poor';
    } else if (percentCorrect < 60 && percentCorrect >= 50) {
      grade = 'Dreadful';
    } else {
      grade = 'Troll';
    }

    if (grade === 'Outstanding') {
      result = 'Impressive. You must be a Ravenclaw with brains like that.';
    } else if (grade === 'Exceeds Expectations') {
      result = 'Exceptional work for a Hufflepuff.';
    } else if (grade === 'Acceptable') {
      result = "You could have done better...but you also could've done worse.";
    } else if (grade === 'Poor') {
      result = 'Wit beyond measure is surely not your treasure.';
    } else if (grade === 'Dreadful') {
      result = 'Maybe you can open a joke shop or something?';
    } else {
      result = 'How did a muggle get in here?!';
    }

    return (
      <div id="end-of-game" className="game-wrapper">
        <h2>Quills down, here's how you did</h2>
        <p>
          Final O.W.L. Score: <span className="gold">{grade}</span>
        </p>
        <p>
          That's a {percentCorrect}% knowledge of all things Harry Potter.
        </p>
        <div id="sorting-hat">
          <div className="hat-wrapper">
            <img src={SortingHat} alt="harry potter sorting hat" />
          </div>
          <div className="results-wrapper">
            <p>
              {result}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default EndOfQuiz;
