import React from 'react';
import Controls from './Controls';
import Statistics from './Statistics';

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
         <Controls
          onGood={this.addGood}
          onNeutral={this.addNeutral}
          onBad={this.addBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          
        />
       
      </div>
    );
  }
}
export default Feedback;
