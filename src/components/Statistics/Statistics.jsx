import css from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul>
    <li className={css.statisticsItem}>Good: {good}</li>
    <li className={css.statisticsItem}>Neutral: {neutral}</li>
    <li className={css.statisticsItem}>Bad: {bad}</li>
    <li className={css.statisticsItem}>Total: {total}</li>
    <li className={css.statisticsItem}>
      Positive feedback: {positivePercentage}%
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
