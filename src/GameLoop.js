import React, { Component } from 'react';
import AllQuestions from './data/all_questions.js';
import Question from './Question';

class GameLoop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: AllQuestions.map((question, index) =>
        <Question
          curQuestion={question.question}
          curAnswerChoices={question.answerChoices}
          curCorrect={question.correctAnswer}
          keepScore={this.handleScore}
          key={index}
        />
      ),
      index: 1,
      totalQuestions: AllQuestions.length,
      score: 0
    };
  }

  handleScore = () => {
    this.setState({ score: (this.state.score += 1) });
  };

  handleNextQuestion = () => {
    let i = this.state.index < this.state.allQuestions.length ? (this.state.index += 1) : 0;
    this.setState({ index: i });
  };

  render() {
    return (
      <div>
        {this.state.allQuestions.slice(0, this.state.index).map(currentQuestion => {
          return (
            <React.Fragment>
              {currentQuestion}
            </React.Fragment>
          );
        })}
        <button onClick={this.handleNextQuestion}>Next Question</button>
      </div>
    );

    // return this.state.allQuestions;
  }
}

export default GameLoop;
