import React, { Component } from 'react';

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
    this.setState({ guess: e.target.textContent });
    this.checkGuess(this.state.guess);
  };

  checkGuess = guess => {
    if (guess === this.state.correctAnswer) {
      this.state.guessedCorrectly = true;
      this.props.keepScore();
    }
  };

  render() {
    return (
      <div>
        <h2>
          {this.props.curQuestion}
        </h2>
        <ol>
          {this.props.curAnswerChoices.map((answerChoice, index) =>
            <li key={index} onClick={this.handleGuess}>
              {answerChoice}
            </li>
          )}
        </ol>
      </div>
    );
  }
}

export default Question;
