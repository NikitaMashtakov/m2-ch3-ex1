import PropTypes from 'prop-types';
import { FieldContainer } from '../FieldContainer/FieldContainer';
import { InformationContainer } from '../InformationContainer/InformationContainer';

export const GameLayout = ({
  field,
  setField,
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  isDraw,
  setIsDraw,
  resetGame,
}) => {
  return (
    <>
      <InformationContainer
        currentPlayer={currentPlayer}
        isDraw={isDraw}
        isGameEnded={isGameEnded}
      />
      <FieldContainer
        field={field}
        setField={setField}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        isGameEnded={isGameEnded}
        setIsGameEnded={setIsGameEnded}
        isDraw={isDraw}
        setIsDraw={setIsDraw}
      />
      <button onClick={resetGame}>Начать с начала</button>
    </>
  );
};

GameLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string),
  setField: PropTypes.func,
  currentPlayer: PropTypes.oneOf(['X', '0']),
  setCurrentPlayer: PropTypes.func,
  isGameEnded: PropTypes.bool,
  setIsGameEnded: PropTypes.func,
  isDraw: PropTypes.bool,
  setIsDraw: PropTypes.func,
  resetGame: PropTypes.func,
};
