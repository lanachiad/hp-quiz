import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Harry Potter Quiz</h1>
        <p>Are you ready to prove yourself as a true fan?</p>
        <button onClick={this.props.beginQuiz}>I'm Ready</button>
      </div>
    );
  }
}

export default Welcome;
