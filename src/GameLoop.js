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
    this.setState({ score: this.state.score + 1 });
  };

  handleNextQuestion = () => {
    let i = this.state.index < this.state.allQuestions.length ? this.state.index + 1 : 0;
    this.removeLastQuestion();
    this.setState({ index: i });
  };

  removeLastQuestion = () => {
    const questionsContainer = document.getElementById('questions-container');

    if (Number(questionsContainer.firstChild.id) + 1 === this.state.totalQuestions) {
      this.props.endQuiz(this.state.score);
    } else if (Number(questionsContainer.firstChild.id) + 1 < this.state.totalQuestions) {
      questionsContainer.firstChild.remove();
    }
  };

  render() {
    return (
      <div id="questions-container">
        {this.state.allQuestions.slice(0, this.state.index).map((currentQuestion, index) => {
          return (
            <div id={index} className="question" key={index}>
              {currentQuestion}
            </div>
          );
        })}
        <button onClick={this.handleNextQuestion}>Next Question</button>
      </div>
    );
  }
}

export default GameLoop;
