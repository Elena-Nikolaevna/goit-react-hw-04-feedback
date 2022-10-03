import propTypes from 'prop-types';
import css from './Feedback.module.css';
const Statistics = ({
  options,
  onCountTotalFeedback,
  onCountPositiveFeedbackPercentage,
}) => (
  <ul className={css.list}>
    <li className={css.box}>
      <p className={css.stat}>Good: {options.good}</p>
    </li>
    <li className={css.box}>
      <p className={css.stat}>Neutral: {options.neutral}</p>
    </li>
    <li className={css.box}>
      <p className={css.stat}>Bad: {options.bad}</p>
    </li>
    <li className={css.box}>
      <p className={css.stat}>Total: {onCountTotalFeedback}</p>
    </li>
    <li className={css.box}>
      <p className={css.stat}>
        Positive feedback: {onCountPositiveFeedbackPercentage} %{' '}
      </p>
    </li>
  </ul>
);
export default Statistics;

Statistics.propTypes = {
  options: propTypes.object.isRequired,  
  onCountTotalFeedback: propTypes.number.isRequired,
  onCountPositiveFeedbackPercentage: propTypes.number.isRequired,
  
};
