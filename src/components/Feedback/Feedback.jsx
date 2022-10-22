import { useState } from 'react';
import Section from './Section';
import ButtonsFeedback from './ButtonsFeedback';
import Notification from './Notification';
import Statistics from './Statistics';
import css from './Feedback.module.css';
import PropTypes from 'prop-types';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackButton = ['Good', 'Neutral', 'Bad'];

  const countFeedback = evt => {
    const name = evt.currentTarget.innerText;
    switch (name) {
        case 'Good':
            setGood(good + 1);
            break;
        case 'Neutral':
            setNeutral(neutral + 1);
            break;
        case 'Bad':
            setBad(bad + 1);
            break;
        default:
        return;
    }
};
const countTotalFeedback = () => {
  const total = good + neutral + bad;
  return total;
};
const countPositiveFeedbackPercentage = () => {
  const positiveFeedback = Math.floor((good * 100) / countTotalFeedback());
  return positiveFeedback;
};

  return (
    <div className={css.feedback}>
      <Section title="Please leave feedback!">
        <ButtonsFeedback
          options={feedbackButton}
          onCountFeedback={countFeedback}
        />
      </Section>

      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            options={{ good, neutral, bad }}
            onCountTotalFeedback={countTotalFeedback()}
            onCountPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
}

Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,    
};
/* class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countFeedback = button => {
    this.setState({ [button]: this.state[button] + 1 });
  };
  
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
 */
