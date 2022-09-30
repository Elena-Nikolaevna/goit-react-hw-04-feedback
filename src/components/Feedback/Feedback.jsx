import React from 'react';
import Controls from './Controls.jsx';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  addNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  addBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
        <div>
            <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total: </li>
            <li>Positive feedback: % </li>
            </ul>
            <Controls
            onGood={this.addGood}
            onNeutral={this.addNeutral}
            onBad={this.addBad}
            />
        </div>
    );
  }
}
export default Feedback;
