import { useState } from 'react';
import { GameLayout } from '../GameLayout/GameLayout';

const startField = Array(9).fill(null);

export const GameContainer = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(startField);
  const resetGame = () => {
    setField(startField);
    setIsGameEnded(false);
    setIsDraw(false);
    setCurrentPlayer('X');
  };
  return (
    <>
      <GameLayout
        field={field}
        setField={setField}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        isGameEnded={isGameEnded}
        setIsGameEnded={setIsGameEnded}
        isDraw={isDraw}
        setIsDraw={setIsDraw}
        resetGame={resetGame}
      />
    </>
  );
};
