import React, { useEffect, useState } from "react";
import "./styles.css";

const Square = ({ value, handleClick }) => {
  return (
    <div onClick={handleClick} className="square">
      {value}
    </div>
  );
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState("");
  const getWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [6, 4, 2],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }
    return null;
  };

  const handleClick = (squareIndex) => {
    let copySquares = [...squares];
    if (getWinner(copySquares) || copySquares.every((item) => item !== "")) {
      return;
    }
    copySquares[squareIndex] = isXTurn ? "X" : "O";
    setSquares(copySquares);
    setIsXTurn(!isXTurn);
  };
  const handleRestart = () => {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
  };

  const checkWinner = () => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setGameStatus("Draw!!,Please Restart the game.");
    } else if (getWinner(squares)) {
      setGameStatus(
        `${getWinner(squares)} won the Game. Click restart to play again`
      );
    } else {
      setGameStatus(`Player ${isXTurn ? "X" : "O"} turn`);
    }
  };
  useEffect(() => {
    checkWinner();
  }, [isXTurn, squares]);

  return (
    <div className="wrapper-container">
      <div className="square-container">
        <Square value={squares[0]} handleClick={() => handleClick(0)} />
        <Square value={squares[1]} handleClick={() => handleClick(1)} />
        <Square value={squares[2]} handleClick={() => handleClick(2)} />
        <Square value={squares[3]} handleClick={() => handleClick(3)} />
        <Square value={squares[4]} handleClick={() => handleClick(4)} />
        <Square value={squares[5]} handleClick={() => handleClick(5)} />
        <Square value={squares[6]} handleClick={() => handleClick(6)} />
        <Square value={squares[7]} handleClick={() => handleClick(7)} />
        <Square value={squares[8]} handleClick={() => handleClick(8)} />
      </div>
      <span>{gameStatus}</span>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default TicTacToe;
