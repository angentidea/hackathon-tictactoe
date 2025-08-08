const prompt = require('prompt-sync')();

let gridno = 1
function tttGrid() {
    grid = []
    for (let i = 0; i < 3; i++) {
    grid[i] = []
    for (let j = 0; j < 3; j++) {
        grid[i][j] = gridno++;
        }
    }
}

function designOfGrid(){

    for (let i = 0; i < 3; i++) {
        let rowStr = '|';
        for (let j = 0; j < 3; j++) {
            rowStr += ' ' + grid[i][j] + ' |'
        }
        console.log(rowStr)
    
        if (i < 3 - 1) {
            console.log('-' + '----'.repeat(3))
        }
    }
}


let playerNameOne = prompt("Player 1, Enter your name. ")

let playerNameTwo = prompt("Player 2, Enter your name. ")

let tossCall = prompt(`${playerNameOne}, call the toss! Please enter either heads or tails! `).trim().toLowerCase();

function coinToss() {
    if (Math.random() < 0.5) {
        return "heads";
    } else {
        return "tails";
    }
};

let tossWinner = ''                     
let playerOneSymbol = ''               
let playerTwoSymbol = ''

function toss() {
    const result = coinToss();        
    console.log(`The coin landed on ${result}.`)

    if (tossCall === result) {
        tossWinner = playerNameOne     
        console.log(`${tossWinner} wins! You may choose first!`)
    } else if (tossCall === "heads" || tossCall === "tails") { 
        tossWinner = playerNameTwo     
        console.log(`${tossWinner} wins! You may choose first!`)
    } else {
        console.log(`Please enter 'heads' or 'tails' `);
    };
    return tossWinner
}

toss();

let choice = prompt(`${tossWinner} Would you like to be noughts or crosses? `).trim().toLowerCase();

if (choice === 'noughts' || choice === 'o') {
    if (tossWinner === playerNameOne) {           
        playerOneSymbol = 'O';                    
        playerTwoSymbol = 'X';                    
    } else {
        playerTwoSymbol = 'O';                    
        playerOneSymbol = 'X';                   
    }
    console.log(`${playerNameOne} is ${playerOneSymbol}. ${playerNameTwo} is ${playerTwoSymbol}.`);
} else if (choice === 'crosses' || choice === 'x') {
    if (tossWinner === playerNameOne) {        
        playerOneSymbol = 'X';                  
        playerTwoSymbol = 'O';                    
    } else {
        playerTwoSymbol = 'X';               
        playerOneSymbol = 'O';                
    }                                          
    console.log(`${playerNameOne} is ${playerOneSymbol}. ${playerNameTwo} is ${playerTwoSymbol}.`);
} else {
    console.log(`Please type either 'noughts' or 'crosses' / 'O' or 'X'. `);
}

console.log(`Hello ${playerNameOne} and ${playerNameTwo}. Ready to play tic-tac-toe? To choose where to put your O or X please type a number from 1-9`)

tttGrid();
designOfGrid();

let currentPlayer = ""
let currentSymbol = ""

if (tossWinner === playerNameOne) {
    currentPlayer = playerNameOne
    currentSymbol = playerOneSymbol
} else {
    currentPlayer = playerNameTwo
    currentSymbol = playerTwoSymbol
}

