import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.buttonsWrap}>
    {options.map(option => (
      <button
        className={css.button}
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option[0].toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
