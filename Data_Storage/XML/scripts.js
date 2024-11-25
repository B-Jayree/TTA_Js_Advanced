const board = document.querySelector('#board');
const squares = [];
for (let i = 0; i < 64; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.dataset.index = i;
    board.appendChild(square);
    squares.push(square);
}

const pieces = {
    white: [
        {type: 'rook', index: 0},
        {type: 'knight', index: 1},
        {type: 'bishop', index: 2},
        {type: 'queen', index: 3},
        {type: 'king', index: 4},
        {type: 'bishop', index: 5},
        {type: 'knight', index: 6},
        {type: 'rook', index: 7},
        {type: 'pawn', index: 8},
        {type: 'pawn', index: 9},
        {type: 'pawn', index: 10},
        {type: 'pawn', index: 11},
        {type: 'pawn', index: 12},
        {type: 'pawn', index: 13},
        {type: 'pawn', index: 14},
        {type: 'pawn', index: 15},
    ],
    black: [
        {type: 'rook', index: 56},
        {type: 'knight', index: 57},
        {type: 'bishop', index: 58},
        {type: 'queen', index: 59},
        {type: 'king', index: 60},
        {type: 'bishop', index: 61},
        {type: 'knight', index: 62},
        {type: 'rook', index: 63},
        {type: 'pawn', index: 48},
        {type: 'pawn', index: 49},
        {type: 'pawn', index: 50},
        {type: 'pawn', index: 51},
        {type: 'pawn', index: 52},
        {type: 'pawn', index: 53},
        {type: 'pawn', index: 54},
        {type: 'pawn', index: 55},
    ]
};

let currentPlayer = 'white';

board.addEventListener('click', (event) => {
    const squareIndex = event.target.dataset.index;
    const piece = pieces[currentPlayer].find(piece => piece.index === parseInt(squareIndex));
    if (piece) {
        const movableSquares = getMovableSquares(piece);
        movableSquares.forEach(index => {
            squares[index].classList.add('movable');
        });
    }
});

function getMovableSquares(piece) {
    const movableSquares = [];
    switch (piece.type) {
        case 'pawn':
            movableSquares.push(piece.index + 8);
            break;
        case 'knight':
            movableSquares.push(piece.index + 2, piece.index - 2, piece.index + 10, piece.index - 10, piece.index + 6, piece.index - 6, piece.index + 17, piece.index - 17);
            break;
        case 'bishop':
            movableSquares.push(piece.index + 9, piece.index - 9, piece.index + 7, piece.index - 7);
            break;
        case 'rook':
            movableSquares.push(piece.index + 1, piece.index - 1, piece.index + 8, piece.index - 8);
            break;
        case 'queen':
            movableSquares.push(piece.index + 1, piece.index - 1, piece.index + 8, piece.index - 8, piece.index + 9, piece.index - 9, piece.index + 7, piece.index - 7);
            break;
        case 'king':
            movableSquares.push(piece.index + 1, piece.index - 1, piece.index + 8, piece.index - 8, piece.index + 9, piece.index - 9, piece.index + 7, piece.index - 7);
            break;
    }
    return movableSquares;
}
