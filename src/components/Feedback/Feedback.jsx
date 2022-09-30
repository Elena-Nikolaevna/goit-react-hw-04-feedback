import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addGood = () => {};

  addNeutral = () => {};

  addBad = () => {};

  render() {
    return (
      <>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: </li>
          <li>Positive feedback: % </li>
        </ul>
        <ul>
          <li>
            <button type="button" onClick={this.addGood}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.addNeutral}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.addBad}>
              Bad
            </button>
          </li>
        </ul>
      </>
    );
  }
}
export default Feedback;
