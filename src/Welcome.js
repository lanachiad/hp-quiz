import React, { Component } from 'react';
import './Universal.css';
import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div id="welcome-screen">
        <div className="game-wrapper">
          <h1>Welcome to the Harry Potter Quiz</h1>
          <p>Are you ready to prove yourself a true fan?</p>
          <button className="button" onClick={this.props.beginQuiz}>
            I'm Ready
          </button>
        </div>
      </div>
    );
  }
}

export default Welcome;
