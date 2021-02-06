console.log('Your JS is linked up.  Be the person you needed when you were little.')

/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
/*----- functions -----*/

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
    
    //this sets the text content of the square of the same position to the mark on the board.

    squares[index].textContent = mark;
    
    });
    };

//be sure to call the init function!
init();
