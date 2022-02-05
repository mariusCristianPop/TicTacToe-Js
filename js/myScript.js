var playerOne = "X";
var playerTwo = "O";
var currentPlayer = playerOne;
var cell;
var numberOfCellsClicked = 0;

function markTheCell(cellId) {
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
    if (numberOfCellsClicked == 9) {
        showResult("This match is a draw. Refresh page to play again!");
    } 
    if (currentPlayer == playerOne) {
        currentPlayer = playerTwo;
    } else {
        currentPlayer = playerOne;
    }
}

function isWinner(playerSign) {
    
    // Assign cells value to variables
    var cellAt11 = document.getElementById(11).innerText;
    var cellAt12 = document.getElementById(12).innerText;
    var cellAt13 = document.getElementById(13).innerText;

    var cellAt21 = document.getElementById(21).innerText;
    var cellAt22 = document.getElementById(22).innerText;
    var cellAt23 = document.getElementById(23).innerText;

    var cellAt31 = document.getElementById(31).innerText;
    var cellAt32 = document.getElementById(32).innerText;
    var cellAt33 = document.getElementById(33).innerText;
    
    //checking the variables against the player sign
    while(true) {
        if ((cellAt11 == playerSign) && (cellAt12 == playerSign) && (cellAt13 == playerSign) ||
            (cellAt11 == playerSign) && (cellAt21 == playerSign) && (cellAt31 == playerSign) ||
            (cellAt11 == playerSign) && (cellAt22 == playerSign) && (cellAt33 == playerSign) ||
            (cellAt12 == playerSign) && (cellAt22 == playerSign) && (cellAt32 == playerSign) ||
            (cellAt13 == playerSign) && (cellAt22 == playerSign) && (cellAt31 == playerSign) ||
            (cellAt13 == playerSign) && (cellAt23 == playerSign) && (cellAt33 == playerSign) || 
            (cellAt21 == playerSign) && (cellAt22 == playerSign) && (cellAt23 == playerSign) ||
            (cellAt31 == playerSign) && (cellAt32 == playerSign) && (cellAt33 == playerSign)) {
                return true;
            }
        return false;
    }
}

function showResult(textResult) {
    var par = document.createElement("p");
    var text = document.createTextNode(textResult);
    par.appendChild(text);
    document.body.appendChild(par);
}