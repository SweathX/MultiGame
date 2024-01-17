import React from 'react';

const Board = ({ size, children }) => {
    const style = {
        width: size,
        height: size,
    };

    return <div className="game-board" style={style}>{children}</div>;
};

export default Board;
