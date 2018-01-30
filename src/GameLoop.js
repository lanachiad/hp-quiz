import React, { Component } from 'react';
import AllQuestions from './data/all_questions.js';
import Question from './Question';

class GameLoop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuestions: AllQuestions.length,
      score: 0
    };
  }

  handleScore = () => {
    this.setState({ score: (this.state.score += 1) });
  };

  render() {
    const allQuestions = AllQuestions.map((question, index) =>
      <Question
        curQuestion={question.question}
        curAnswerChoices={question.answerChoices}
        curCorrect={question.correctAnswer}
        keepScore={this.handleScore}
        key={index}
      />
    );

    return allQuestions;
  }
}

export default GameLoop;
