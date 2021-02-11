console.log('Tic Tac Toe')

/*----- constants -----*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

    /*----- app's state (variables) -----*/

let board;
let turn = 'X';
let win;
let winner = null;

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);

/*----- functions -----*/

function getWinner() {
    // let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
      });
      return winner ? winner : board.includes('') ? null : 'T';
    };

// function getWinner() {
//     let winner = null;
//     winningCombos.forEach((combo, index) => {
//     if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
//     winner = board[combo[0]];
//     }
//     });
//     // new code below
//     if (winner) {
//         return winner 
//     } else if (board.includes('')) {
//         return null // if there's an empty space, return null (no winner yet)
//     } else {
//         return 'T' // no winner and no empty spaces? That's a tie!
//     }
    
function handleTurn(event) {
    if (winner !== null) {
        return
    }
    
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });

    // if ( win === 'T' ) {
    //      messages.textContent = `It's a tie!`
    //   } else if (win) { 
    //     messages.textContent = `${win} wins the game!`
    //   } else {
    //     messages.textContent = `It's ${turn}'s turn!`
    //   }
    
    // Check for invalid move
    if (board[idx] === '') {    
        board[idx] = turn;
        turn = turn === 'X' ? 'O' : 'X';
    }
    // In an if statement it would look like: 
    // if (turn === 'X') {
    // turn = 'O' 
    // } else {
    // turn = 'X' 
    // };    
    
    win = getWinner();
    render();
}; 

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    win = null;
    turn = 'X';
    render();    
};

function render() {
    board.forEach(function(mark, index){
    
    //this moves the value of the board item into the squares[idx]

    squares[index].textContent = mark;
    
    });
    messages.textContent = win === 'T' ? `It's a tie!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
    
    // if ( win === 'T' ) {
    //     messages.textContent = `It's a tie!`
    //   } else if (win) { 
    //     messages.textContent = `${win} wins the game!`
    //   } else {
    //     messages.textContent = `It's ${turn}'s turn!`
    //   }
};
//be sure to call the init function!
init();
