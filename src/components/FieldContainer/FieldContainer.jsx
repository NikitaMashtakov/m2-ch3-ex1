import PropTypes from 'prop-types';
import { FieldLayout } from '../FieldLayout/FieldLayout';

export const FieldContainer = ({
  field,
  setField,
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  setIsDraw,
}) => {
  const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8],
    [2, 4, 6], // Варианты побед по диагонали
  ];

  const checkWinner = (field) => {
    let winner = null;
    WIN_PATTERNS.forEach((pattern) => {
      const [a, b, c] = pattern;
      if (field[a] && field[a] === field[b] && field[a] === field[c]) {
        setIsGameEnded(true);
        winner = field[a];
        return;
      }
    });
    if (!winner && field.every((value) => value !== null)) {
      setIsDraw(true);
    }
    return winner;
  };

  const handleClick = (index) => {
    let newField = field.slice();
    newField[index] = currentPlayer;
    const winner = checkWinner(newField);
    setField(newField);
    if (!winner) {
      currentPlayer === 'X' ? setCurrentPlayer('0') : setCurrentPlayer('X');
    }
  };

  return (
    <div>
      {field.map((value, index) => (
        <FieldLayout
          key={index}
          value={value}
          onClick={() => handleClick(index)}
          disabled={field[index] || isGameEnded}
        />
      ))}
    </div>
  );
};

FieldContainer.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string),
  setField: PropTypes.func,
  currentPlayer: PropTypes.oneOf(['X', '0']),
  setCurrentPlayer: PropTypes.func,
  isGameEnded: PropTypes.bool,
  setIsGameEnded: PropTypes.func,
  setIsDraw: PropTypes.func,
};
