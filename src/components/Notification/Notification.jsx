import css from '../Notification/Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <span className={css.notification}>{message}</span>
);

Notification.propTypes = {
  message: PropTypes.string,
};
