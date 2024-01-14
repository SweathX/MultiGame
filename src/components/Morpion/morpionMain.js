import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './morpion.css';
// import styled from 'styled-components';


function Morpion() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const winner = calculateWinner(board);

    function handleClick(index) {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    }

    function calculateWinner(board) {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }

    function renderSquare(index) {
        return <button onClick={() => handleClick(index)}>{board[index]}</button>;
    }

    return (
        <div className='toggle-div'>
            <h1>Bienvenue sur le jeu Morpion</h1>
            <div className="game-board">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <div className="game-info">
                <div>{winner ? 'Gagnant: ' + winner : 'Joueur actuel: ' + (isXNext ? 'X' : 'O')}</div>
                {!winner && !board.includes(null) && <div>Match nul!</div>}
            </div>
            <Link to="/">Retour au menu</Link>
        </div>
    );
}

export default Morpion;