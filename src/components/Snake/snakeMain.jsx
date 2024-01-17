import React, { useState, useEffect } from 'react';
import Board from './Board';
import Snake from './Snake';
import Food from './Food';
import "./Snake.css";

const getRandomCoordinates = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    return [x, y];
};

const SnakeMain = () => {
    const [snakeDots, setSnakeDots] = useState([[0, 0], [2, 0]]);
    const [foodDot, setFoodDot] = useState(getRandomCoordinates());
    const [direction, setDirection] = useState('RIGHT');
    const [speed, setSpeed] = useState(200);

    useEffect(() => {
        document.onkeydown = onKeyDown;
        checkIfOutOfBorders();
        checkIfCollapsed();
        checkIfEat();
        const interval = setInterval(moveSnake, speed);
        return () => clearInterval(interval);
    });

    const onKeyDown = (e) => {
        e = e || window.event;
        switch (e.keyCode) {
            case 38:
                setDirection('UP');
                break;
            case 40:
                setDirection('DOWN');
                break;
            case 37:
                setDirection('LEFT');
                break;
            case 39:
                setDirection('RIGHT');
                break;
            default:
                break;
        }
    }

    const moveSnake = () => {
        let dots = [...snakeDots];
        let head = dots[dots.length - 1];

        switch (direction) {
            case 'RIGHT':
                head = [head[0] + 2, head[1]];
                break;
            case 'LEFT':
                head = [head[0] - 2, head[1]];
                break;
            case 'DOWN':
                head = [head[0], head[1] + 2];
                break;
            case 'UP':
                head = [head[0], head[1] - 2];
                break;
            default:
                break;
        }
        dots.push(head);
        dots.shift();
        setSnakeDots(dots);
    }

    const checkIfOutOfBorders = () => {
        let head = snakeDots[snakeDots.length - 1];
        if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
            onGameOver();
        }
    }

    const checkIfCollapsed = () => {
        let snake = [...snakeDots];
        let head = snake[snake.length - 1];
        snake.pop();
        snake.forEach(dot => {
            if (head[0] === dot[0] && head[1] === dot[1]) {
                onGameOver();
            }
        })
    }

    const checkIfEat = () => {
        let head = snakeDots[snakeDots.length - 1];
        if (head[0] === foodDot[0] && head[1] === foodDot[1]) {
            setFoodDot(getRandomCoordinates());
            enlargeSnake();
            increaseSpeed();
        }
    }

    const enlargeSnake = () => {
        let newSnake = [...snakeDots];
        newSnake.unshift([]);
        setSnakeDots(newSnake);
    }

    const increaseSpeed = () => {
        if (speed > 10) {
            setSpeed(speed - 10);
        }
    }

    const onGameOver = () => {
        alert(`Game Over. Snake length is ${snakeDots.length}`);
        setSnakeDots([[0, 0], [2, 0]]);
        setFoodDot(getRandomCoordinates());
        setDirection('RIGHT');
        setSpeed(200);
    }

    return (
        <div className="game-area">
            <Board size={500}>
                <Snake snakeDots={snakeDots} />
                <Food dot={foodDot} />
            </Board>
        </div>
    );
}

export default SnakeMain;