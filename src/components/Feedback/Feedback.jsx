import React from 'react';
import Section from './Section';
import ButtonsFeedback from './ButtonsFeedback';
import Notification from './Notification';
import Statistics from './Statistics';
import css from './Feedback.module.css';


class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countFeedback = button => {
    this.setState({ [button]: this.state[button] + 1 });
  };
  /* addGood = () => {
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
 */
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positsve = Math.round((this.state.good * 100) / total);
    return positsve;
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.feedback}>
        <Section title="Please leave feedback!">
          <ButtonsFeedback
            options={options}
            onCountFeedback={this.countFeedback}
          />
        </Section>

        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics" >
            <Statistics 
              options={{ good, neutral, bad }}
              onCountTotalFeedback={this.countTotalFeedback()}
              onCountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
export default Feedback;
