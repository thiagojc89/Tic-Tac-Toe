console.log('Your JS is linked up.  Be the person you needed when you were little.')

/*----- constants -----*/
/*----- app's state (variables) -----*/

let board;

let turn = 'X';

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

const messages = document.querySelector('h2');

/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', handleTurn);

/*----- functions -----*/

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';

    // In an if statement it would look like: 
    // if (turn === 'X') {
    // turn = 'O' 
    // } else {
    // turn = 'X' 
    // };    
    //win = getWinner();
    render();
};

function init() {
    board = [
    '', '', '',
    '', 'X', '',
    '', '', ''
    ];
    render();
};

function render() {
    board.forEach(function(mark, index){
    
    //this moves the value of the board item into the squares[idx]

    squares[index].textContent = mark;
    
    });
    messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
    };

//be sure to call the init function!
init();
