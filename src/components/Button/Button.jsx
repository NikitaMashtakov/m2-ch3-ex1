import PropTypes from 'prop-types';
import styles from './Button.module.css';
export const Button = ({ onButtonClick, isGameEnded, children }) => {
  return (
    <button
      className={styles.button + ' ' + `${isGameEnded ? styles.endOfGame : ''}`}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  isGameEnded: PropTypes.bool,
  onButtonClick: PropTypes.func,
};
