document.addEventListener("DOMContentLoaded", function() { 
    // wait for the html page to load before executing the script or else appending to body will result in an error;
    createGameBoard();
});

var playerOne = "X";
var playerTwo = "O";
var currentPlayer = playerOne;
var cell;
var numberOfCellsClicked = 0;
var gameOver = false;
var gameBoard = [];

// create the game board
function createGameBoard() {
    // create the grid container
    var gridContainer = document.createElement('div');
    gridContainer.setAttribute("id", "gridContainer");
    gridContainer.setAttribute("class", "grid-container");
    // create the outer grid
    var outerGrid = document.createElement('div');
    outerGrid.setAttribute("class", "outer-grid");
    gridContainer.appendChild(outerGrid);
    // create the outer square
    var outerSquare = document.createElement('div');
    outerSquare.setAttribute("class", "outer-square");
    outerGrid.appendChild(outerSquare);
    //create the inner grid
    for (let i = 1; i < 4; ++i) {
        for (let j = 1; j < 4; ++j) {
            var innerGrid = document.createElement('div');
            innerGrid.setAttribute("class", "inner-grid");
            var innerSquare = document.createElement('div');
            innerSquare.setAttribute("class", "inner-square");
            innerSquare.setAttribute("id", `${i * 10 + j}`);
            innerSquare.setAttribute("onclick", `markTheCell(${i * 10 + j})`);
            innerSquare.setAttribute("style", "cursor: pointer;");
            innerGrid.appendChild(innerSquare);
            outerSquare.appendChild(innerGrid);  
        }
    }
    document.body.appendChild(gridContainer);
}

function createGameArray() {
    gameBoard = [["1", "1", "1"],["1", "1", "1"],["1", "1", "1"],["1", "1", "1"]];
}

function markTheCell(cellId) {
    createGameArray();
    cell = document.getElementById(cellId);
    cell.innerText = currentPlayer;
    cell.onclick = "";
    ++numberOfCellsClicked;
    console.log(isWinner(currentPlayer)); // left here on purpose for debugging reasons.
    if (isWinner(currentPlayer)) {
        var div = document.getElementById("gridContainer");
        div.remove();
        showResult( `Player ${currentPlayer} wins. Refresh page to play again!`);
    }
    if (numberOfCellsClicked == 9 && !gameOver) {
        showResult("This match is a draw. Refresh page to play again!");
    } 
    if (currentPlayer == playerOne) {
        currentPlayer = playerTwo;
    } else {
        currentPlayer = playerOne;
    }
}

function isWinner(playerSign) {
    // Add cell values to array
    for (let i = 1; i < 4; ++i) {
        for (let j = 1; j < 4; ++j) {
            var elem = document.getElementById(`${i * 10 + j}`);
            if (elem != null) {
                gameBoard[i][j] = elem.innerText;
            }
            //checking the variables against the player sign
            if ((gameBoard[1][1] == playerSign) && (gameBoard[1][2]  == playerSign) && (gameBoard[1][3] == playerSign) ||
            (gameBoard[1][1] == playerSign) && (gameBoard[2][1]  == playerSign) && (gameBoard[3][1] == playerSign) ||
            (gameBoard[1][1] == playerSign) && (gameBoard[2][2]  == playerSign) && (gameBoard[3][3] == playerSign) ||
            (gameBoard[1][2] == playerSign) && (gameBoard[2][2]  == playerSign) && (gameBoard[3][2] == playerSign) ||
            (gameBoard[1][3] == playerSign) && (gameBoard[2][2]  == playerSign) && (gameBoard[3][1] == playerSign) ||
            (gameBoard[1][3] == playerSign) && (gameBoard[2][3]  == playerSign) && (gameBoard[3][3] == playerSign) ||
            (gameBoard[2][1] == playerSign) && (gameBoard[2][2]  == playerSign) && (gameBoard[2][3] == playerSign) ||
            (gameBoard[3][1] == playerSign) && (gameBoard[3][2]  == playerSign) && (gameBoard[3][3] == playerSign)) {
            gameOver = true;
            return true;
            }
        }
    }
    return false;
}

function showResult(textResult) {
    var par = document.createElement("p");
    var text = document.createTextNode(textResult);
    par.appendChild(text);
    document.body.appendChild(par);
}