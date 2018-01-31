import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: this.props.curCorrect,
      guess: '',
      guessedCorrectly: false
    };
  }

  handleAnsweredState = () => {
    this.setState({ answered: true });
  };

  handleGuess = e => {
    this.setState({ guess: e.target.textContent }, () => {
      this.checkGuess(this.state.guess);
    });
    const selectedChoice = e.target;
    selectedChoice.classList.toggle('selected');
  };

  checkGuess = guess => {
    if (guess === this.state.correctAnswer && this.state.guessedCorrectly !== true) {
      this.setState({
        guessedCorrectly: true
      });
      this.props.keepScore();
    }
  };

  render() {
    return (
      <React.Fragment>
        <h2>
          {this.props.curQuestion}
        </h2>
        <ul className="answers">
          {this.props.curAnswerChoices.map((answerChoice, index) =>
            <li className="answer-choice" key={index} onClick={this.handleGuess}>
              {answerChoice}
            </li>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default Question;
