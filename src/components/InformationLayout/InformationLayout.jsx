import styles from './InformationLayout.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
  return (
    <div className={styles.container}>
      {isDraw
        ? 'Ничья'
        : !isDraw && isGameEnded
        ? `Победа: ${currentPlayer}`
        : `Ходит: ${currentPlayer}`}
    </div>
  );
};
InformationLayout.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', '0']),
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
};
