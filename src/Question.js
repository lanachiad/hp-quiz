import React, { Component } from 'react';
// import SubmitGuess from './SubmitGuess';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
      correctAnswer: this.props.curCorrect,
      guess: ''
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
      console.log('Correct!');
    } else {
      console.log('Incorrect!');
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
