import propTypes from 'prop-types';
import css from './Feedback.module.css';
const ButtonsFeedback = ({ options, onCountFeedback }) => (
  <ul className={css.ul}>
    {options.map(option => (
      <li key={option}>
        <button
          className={css.button}
          type="button"
          name={option}
          onClick={() => onCountFeedback(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);
export default ButtonsFeedback;

ButtonsFeedback.propTypes = {
  options: propTypes.array,
  option: propTypes.string,
  onCountFeedback: propTypes.func.isRequired,
};
