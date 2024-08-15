console.log("X's Turn");
let turn = 'X';
let isGameOver = false;

const changeTurn = () => {
    return turn === 'X' ? 'O' : 'X';
}

const checkWin = () => {
    const boxTexts = document.querySelectorAll('.cell');
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    let winDetected = false;
    wins.forEach(e => {
        if ((boxTexts[e[0]].innerHTML === boxTexts[e[1]].innerHTML) && 
            (boxTexts[e[2]].innerHTML === boxTexts[e[1]].innerHTML) && 
            (boxTexts[e[0]].innerHTML !== '')) {
            document.querySelector('.info').innerHTML = boxTexts[e[0]].innerHTML + " Wins!";
            isGameOver = true;
            winDetected = true;
        }
    });

    if (!winDetected) {
        let isTie = true;
        boxTexts.forEach(box => {
            if (box.innerHTML === '') {
                isTie = false;
            }
        });
        if (isTie) {
            document.querySelector('.info').innerHTML = "It's a Tie!";
            isGameOver = true;
        }
    }
}

const resetGame = () => {
    const boxTexts = document.querySelectorAll('.cell');
    boxTexts.forEach(cell => {
        cell.innerHTML = '';
    });
    turn = 'X';
    isGameOver = false;
    document.querySelector('.info').innerHTML = "X's turn";
}

let boxes = document.querySelectorAll(".cell");
boxes.forEach(element => {
    element.addEventListener('click', () => {
        if (element.innerHTML === '' && !isGameOver) {
            element.innerHTML = turn;
            checkWin();
            if (!isGameOver) {
                turn = changeTurn();
                document.querySelector('.info').innerHTML = turn + "'s turn";
            }
        }
    });
});

document.querySelector('button').addEventListener('click', resetGame);
