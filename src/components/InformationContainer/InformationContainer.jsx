import PropTypes from 'prop-types';
import { InformationLayout } from '../InformationLayout/InformationLayout';

export const InformationContainer = ({ currentPlayer, isDraw, isGameEnded }) => {
  return (
    <>
      <InformationLayout
        currentPlayer={currentPlayer}
        isDraw={isDraw}
        isGameEnded={isGameEnded}
      />
    </>
  );
};

InformationContainer.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', '0']),
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
};
