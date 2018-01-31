import React, { Component } from 'react';

class EndOfQuiz extends Component {
  render() {
    return (
      <div>
        <h2>Quills down, here's how you did</h2>
        <p>
          Final score: {this.props.finalScore}
        </p>
        <p>
          That's a {this.props.finalScore / this.props.totalQuest * 100}% knowledge of all things Harry Potter.
        </p>
      </div>
    );
  }
}

export default EndOfQuiz;
