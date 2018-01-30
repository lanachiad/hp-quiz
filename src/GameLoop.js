import React, { Component } from 'react';
import AllQuestions from './data/all_questions.js';
import Question from './Question';

class GameLoop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuestions: AllQuestions.length
    };
  }

  render() {
    const allQuestions = AllQuestions.map((question, index) =>
      <Question
        curQuestion={question.question}
        curAnswerChoices={question.answerChoices}
        curCorrect={question.correctAnswer}
        key={index}
      />
    );

    return allQuestions;
  }
}

export default GameLoop;
