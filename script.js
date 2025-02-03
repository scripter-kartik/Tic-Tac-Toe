let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameover = false;

const boxs = document.querySelectorAll('.box');
const message = document.getElementById('message');

boxs.forEach((box, index) => {
    box.addEventListener('click', () => {
        if(gameover || board[index] !== '') return;
        board[index] = currentPlayer;
        box.textContent = currentPlayer;
        if(checkWinner(currentPlayer)){
            message.textContent = `${currentPlayer} wins!`
            gameover = true;
        }
        else if(board.every(box => box !== '')){
            message.textContent = "It's a Draw!"
            gameover = true;
        }
        else{
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
            
            message.textContent = `player ${currentPlayer} Turn`;
        }
    });
});

function checkWinner(player){
    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    return winningCombinations.some(combination => {
            return combination.every(index => board[index] === player);
    });
}