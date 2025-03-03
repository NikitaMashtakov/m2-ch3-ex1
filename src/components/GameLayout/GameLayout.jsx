import styles from './GameLayout.module.css';
import PropTypes from 'prop-types';
import { FieldContainer } from '../FieldContainer/FieldContainer';
import { InformationContainer } from '../InformationContainer/InformationContainer';
import { Button } from '../Button/Button';

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
    <div className={styles.container}>
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
      <Button onButtonClick={resetGame} isGameEnded={isGameEnded}>
        Начать с начала
      </Button>
    </div>
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
