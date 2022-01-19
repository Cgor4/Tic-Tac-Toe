//2d array for occupation status of a cell 
var occupied = [false, false, false, false, false, false, false, false, false];
//2d array for character occupying a cell 
var charInCell = [null, null, null, null, null, null, null, null, null];
//Variables for player Turn 
var xTurn = true;
var oTurn = false;
//update win check loop interval
var updateTime = 500;
var aiUpdateInterval = 250;

var aiEnabled = false;


//Trigger for win check loop 
window.setInterval('checkWin()', updateTime);
window.setInterval('aiAlgorithm()', aiUpdateInterval);

function aiAlgorithm() { 
    if(aiEnabled == true && oTurn == true && occupied[4] == false) { 
       charInCell[4] = 'O';
       document.getElementById('fifthText').innerHTML = charInCell[4];
       occupied[4] = true;
       oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[0] == true && occupied[6] == true && charInCell[0] == 'X' && charInCell[6] == 'X' && occupied[3] == false) { 
        charInCell[3] = 'O';
        document.getElementById('fourthText').innerHTML = charInCell[3];
        occupied[3] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[2] == true && occupied[8] == true && charInCell[2] == 'X' && charInCell[8] == 'X' && occupied[5] == false) { 
        charInCell[5] = 'O';
        document.getElementById('sixthText').innerHTML = charInCell[5];
        occupied[5] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[0] == true && occupied[2] == true && charInCell[0] == 'X' && charInCell[2] == 'X' && occupied[1] == false) { 
        charInCell[1] = 'O';
        document.getElementById('secondText').innerHTML = charInCell[1];
        occupied[1] = true;
        oTurn = false;
       xTurn = true;
    } else if(aiEnabled == true && oTurn == true && occupied[6] == true && occupied[8] == true && charInCell[6] == 'X' && charInCell[8] == 'X' && occupied[7] == false) { 
        charInCell[7] = 'O';
        document.getElementById('eighthText').innerHTML = charInCell[7];
        occupied[7] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[0] == true && occupied[3] == true && charInCell[0] == 'X' && charInCell[3] == 'X' && occupied[6] == false) { 
        charInCell[6] = 'O';
        document.getElementById('seventhText').innerHTML = charInCell[6];
        occupied[6] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[1] == true && occupied[4] == true && charInCell[1] == 'X' && charInCell[4] == 'X' && occupied[7] == false) { 
        charInCell[7] = 'O';
        document.getElementById('eighthText').innerHTML = charInCell[7];
        occupied[7] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[7] == true && occupied[4] == true && charInCell[7] == 'X' && charInCell[4] == 'X' && occupied[1] == false) { 
        charInCell[1] = 'O';
        document.getElementById('secondText').innerHTML = charInCell[1];
        occupied[1] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[2] == true && occupied[5] == true && charInCell[2] == 'X' && charInCell[5] == 'X' && occupied[8] == false) { 
        charInCell[8] = 'O';
        document.getElementById('ninethText').innerHTML = charInCell[8];
        occupied[8] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[6] == true && occupied[3] == true && charInCell[6] == 'X' && charInCell[3] == 'X' && occupied[0] == false) { 
        charInCell[0] = 'O';
        document.getElementById('firstText').innerHTML = charInCell[0];
        occupied[0] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[5] == true && occupied[8] == true && charInCell[5] == 'X' && charInCell[8] == 'X' && occupied[2] == false) { 
        charInCell[2] = 'O';
        document.getElementById('thirdText').innerHTML = charInCell[2];
        occupied[2] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[0] == true && occupied[1] == true && charInCell[0] == 'X' && charInCell[1] == 'X' && occupied[2] == false) { 
        charInCell[2] = 'O';
        document.getElementById('thirdText').innerHTML = charInCell[2];
        occupied[2] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[3] == true && occupied[4] == true && charInCell[3] == 'X' && charInCell[4] == 'X' && occupied[5] == false) { 
        charInCell[5] = 'O';
        document.getElementById('sixthText').innerHTML = charInCell[5];
        occupied[5] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[6] == true && occupied[7] == true && charInCell[6] == 'X' && charInCell[7] == 'X' && occupied[8] == false) { 
        charInCell[8] = 'O';
        document.getElementById('ninethText').innerHTML = charInCell[8];
        occupied[8] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[2] == true && occupied[1] == true && charInCell[2] == 'X' && charInCell[1] == 'X' && occupied[0] == false) { 
        charInCell[0] = 'O';
        document.getElementById('firstText').innerHTML = charInCell[0];
        occupied[0] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[5] == true && occupied[4] == true && charInCell[5] == 'X' && charInCell[4] == 'X' && occupied[3] == false) { 
        charInCell[3] = 'O';
        document.getElementById('fourthText').innerHTML = charInCell[3];
        occupied[3] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[8] == true && occupied[7] == true && charInCell[8] == 'X' && charInCell[7] == 'X' && occupied[6] == false) { 
        charInCell[6] = 'O';
        document.getElementById('seventhText').innerHTML = charInCell[6];
        occupied[6] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[0] == false) { 
        charInCell[0] = 'O';
        document.getElementById('firstText').innerHTML = charInCell[0];
        occupied[0] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[2] == false) { 
        charInCell[2] = 'O';
        document.getElementById('thirdText').innerHTML = charInCell[2];
        occupied[2] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[6] == false) { 
        charInCell[6] = 'O';
        document.getElementById('seventhText').innerHTML = charInCell[6];
        occupied[6] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[8] == false) { 
        charInCell[8] = 'O';
        document.getElementById('ninethText').innerHTML = charInCell[8];
        occupied[8] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[1] == false) { 
        charInCell[1] = 'O';
        document.getElementById('secondText').innerHTML = charInCell[1];
        occupied[1] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[5] == false) { 
        charInCell[5] = 'O';
        document.getElementById('sixthText').innerHTML = charInCell[5];
        occupied[5] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[7] == false) { 
        charInCell[7] = 'O';
        document.getElementById('eighthText').innerHTML = charInCell[7];
        occupied[7] = true;
        oTurn = false;
       xTurn = true;
    }else if(aiEnabled == true && oTurn == true && occupied[3] == false) { 
        charInCell[3] = 'O';
        document.getElementById('fourthText').innerHTML = charInCell[3];
        occupied[3] = true;
        oTurn = false;
       xTurn = true;
    }








}


//If first cell is clicked, check if it's occupied. If it isn't, mark it with whichever character's turn it is
function upperLeftClicked() {

    if (occupied[0] == false) {

        occupied[0] = true;

        if (xTurn == true) {
            console.log("Upper-Left Corner Occupied by X");
            charInCell[0] = 'X';
            console.log("Occupied is " + occupied[0]);
            xTurn = false;
            oTurn = true;
        } else {
            console.log("Upper-Left Corner Occupied by O");
            charInCell[0] = 'O';
            console.log("Occupied is " + occupied[0]);
            xTurn = true;
            oTurn = false;
        }

        document.getElementById('firstText').innerHTML = charInCell[0];
    }

}

function upperEdgeClicked() {

    if (occupied[1] == false) {

        occupied[1] = true;

        if (xTurn == true) {
            console.log("Upper Edge Occupied by X");
            charInCell[1] = 'X';
            console.log("Occupied is " + occupied[1]);
            xTurn = false;
            oTurn = true;
        } else {
            console.log("Upper Edge Occupied by O");
            charInCell[1] = 'O';
            console.log("Occupied is " + occupied[1]);
            xTurn = true;
            oTurn = false;
        }

        document.getElementById('secondText').innerHTML = charInCell[1];

    }

}

function upperRightClicked() {

    if (occupied[2] == false) {

        occupied[2] = true;

        if (xTurn == true) {
            console.log("Upper-Right Corner Occupied by X");
            charInCell[2] = 'X';
            console.log("Occupied is " + occupied[2]);
            xTurn = false;
            oTurn = true;
        } else {
            console.log("Upper-Right Corner Occupied by O");
            charInCell[2] = 'O';
            console.log("Occupied is " + occupied[2]);
            xTurn = true;
            oTurn = false;
        }

        document.getElementById('thirdText').innerHTML = charInCell[2];

    }

}

function leftEdgeClicked() {

    if (occupied[3] == false) {

        occupied[3] = true;

        if (xTurn == true) {
            console.log("Left Edge Occupied by X");
            charInCell[3] = 'X';
            console.log("Occupied is " + occupied[3]);
            xTurn = false;
            oTurn = true;
        } else {
            console.log("Left Edge Occupied by O");
            charInCell[3] = 'O';
            console.log("Occupied is " + occupied[3]);
            xTurn = true;
            oTurn = false;
        }

        document.getElementById('fourthText').innerHTML = charInCell[3]; 

    }

}

function middleClicked() {

    if (occupied[4] == false) {

        occupied[4] = true;

        if (xTurn == true) {
            console.log("Middle Occupied by X");
            charInCell[4] = 'X';
            console.log("Occupied is " + occupied[4]);
            xTurn = false;
            oTurn = true;
        } else {
            console.log("Middle Occupied by O");
            charInCell[4] = 'O';
            console.log("Occupied is " + occupied[4]);
            xTurn = true;
            oTurn = false;
        }

        document.getElementById('fifthText').innerHTML = charInCell[4];

    }

}

function rightEdgeClicked() {

    if (occupied[5] == false) {

        occupied[5] = true;

        if (xTurn == true) {
            console.log("Right Edge Occupied by X");
            charInCell[5] = 'X';
            console.log("Occupied is " + occupied[5]);
            xTurn = false;
            oTurn = true;
        } else {
            console.log("Right Edge Occupied by O");
            charInCell[5] = 'O';
            console.log("Occupied is " + occupied[5]);
            xTurn = true;
            oTurn = false;
        }

        document.getElementById('sixthText').innerHTML = charInCell[5];

    }

}

function lowerLeftClicked() {

    if (occupied[6] == false) {

        occupied[6] = true;

        if (xTurn == true) {
            console.log("Lower-Left Corner Occupied by X");
            charInCell[6] = 'X';
            console.log("Occupied is " + occupied[6]);
            xTurn = false;
            oTurn = true;
        } else {
            console.log("Lower-Left Corner Occupied by O");
            charInCell[6] = 'O';
            console.log("Occupied is " + occupied[6]);
            xTurn = true;
            oTurn = false;
        }

        document.getElementById('seventhText').innerHTML = charInCell[6];

    }

}

function lowerEdgeClicked() {

    if (occupied[7] == false) {

        occupied[7] = true;

        if (xTurn == true) {
            console.log("Lower Edge Occupied by X");
            charInCell[7] = 'X';
            console.log("Occupied is " + occupied[7]);
            xTurn = false;
            oTurn = true;
        } else {
            console.log("Lower Edge Occupied by O");
            charInCell[7] = 'O';
            console.log("Occupied is " + occupied[7]);
            xTurn = true;
            oTurn = false;
        }

        document.getElementById('eighthText').innerHTML = charInCell[7];

    }

}

function lowerRightClicked() {

    if (occupied[8] == false) {

        occupied[8] = true;

        if (xTurn == true) {
            console.log("Lower-Right Corner Occupied by X");
            charInCell[8] = 'X';
            xTurn = false;
            oTurn = true;
        } else {
            console.log("Lower-Right Corner Occupied by O");
            charInCell[8] = 'O';
            xTurn = true;
            oTurn = false;
        }

        document.getElementById('ninethText').innerHTML = charInCell[8];

    }

}

function ai() { 
    aiEnabled = true; 
  console.log("AI is on");

 }


function checkWin() {

    //Win Conditionals 
    if (charInCell[0] == 'X' && charInCell[1] == 'X' && charInCell[2] == 'X') {
        console.log("X WINS");
        document.getElementById('victoryStatus').innerHTML = 'X WINS!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    } else if (charInCell[0] == 'O' && charInCell[1] == 'O' && charInCell[2] == 'O') {
        console.log("O WINS");
        document.getElementById('victoryStatus').innerHTML = 'O WINS!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    } else if (charInCell[3] == 'X' && charInCell[4] == 'X' && charInCell[5] == 'X') {
        console.log("X WINS");
        document.getElementById('victoryStatus').innerHTML = 'X WINS!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    } else if (charInCell[3] == 'O' && charInCell[4] == 'O' && charInCell[5] == 'O') {
        console.log("O WINS");
        document.getElementById('victoryStatus').innerHTML = 'O WINS!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    } else if (charInCell[6] == 'X' && charInCell[7] == 'X' && charInCell[8] == 'X') {
        console.log("X WINS");
        document.getElementById('victoryStatus').innerHTML = 'X WINS!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    } else if (charInCell[6] == 'O' && charInCell[7] == 'O' && charInCell[8] == 'O') {
        console.log("O WINS");
        document.getElementById('victoryStatus').innerHTML = 'O WINS!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    } else if (charInCell[0] == 'X' && charInCell[3] == 'X' && charInCell[6] == 'X') {
        console.log("X WINS");
        document.getElementById('victoryStatus').innerHTML = 'X WINS!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    } else if (charInCell[0] == 'O' && charInCell[3] == 'O' && charInCell[6] == 'O') {
        console.log("O WINS");
        document.getElementById('victoryStatus').innerHTML = 'O WINS!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    } else if (charInCell[1] == 'X' && charInCell[4] == 'X' && charInCell[7] == 'X') {
        console.log("X WINS");
        document.getElementById('victoryStatus').innerHTML = 'X WINS!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    } else if (charInCell[1] == 'O' && charInCell[4] == 'O' && charInCell[7] == 'O') {
        console.log("O WINS");
        document.getElementById('victoryStatus').innerHTML = 'O WINS!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    } else if (charInCell[2] == 'X' && charInCell[5] == 'X' && charInCell[8] == 'X') {
        console.log("X WINS");
        document.getElementById('victoryStatus').innerHTML = 'X WINS!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    } else if (charInCell[2] == 'O' && charInCell[5] == 'O' && charInCell[8] == 'O') {
        console.log("O WINS");
        document.getElementById('victoryStatus').innerHTML = 'O WINS!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    } else if (charInCell[0] == 'X' && charInCell[4] == 'X' && charInCell[8] == 'X') {
        console.log("X WINS");
        document.getElementById('victoryStatus').innerHTML = 'X WINS!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    } else if (charInCell[0] == 'O' && charInCell[4] == 'O' && charInCell[8] == 'O') {
        console.log("O WINS");
        document.getElementById('victoryStatus').innerHTML = 'O WINS!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    } else if (charInCell[2] == 'X' && charInCell[4] == 'X' && charInCell[6] == 'X') {
        console.log("X WINS");
        document.getElementById('victoryStatus').innerHTML = 'X WINS!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    } else if (charInCell[2] == 'O' && charInCell[4] == 'O' && charInCell[6] == 'O') {
        console.log("O WINS");
        document.getElementById('victoryStatus').innerHTML = 'O WINS!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    }  else if (occupied[0] == true && occupied[1] == true && occupied[2] == true && occupied[3] == true && occupied[4] == true && occupied[5] == true && occupied[6] == true && occupied[7] == true && occupied[8] == true) {
        console.log("DRAW");
        document.getElementById('victoryStatus').innerHTML = 'DRAW!';
        for(i = 0; i < 10; i++) { 
            occupied[i] = true; 
        }
    } 



}