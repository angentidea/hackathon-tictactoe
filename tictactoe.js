const prompt = require('prompt-sync')();

function tttGrid() {
    const grid = Array.from({ length: 3 }, () =>
        Array.from({ length: 3 }, () => ' ')
    );
    for (let i = 0; i < 3; i++) {
        let rowStr = '|';
        for (let j = 0; j < 3; j++) {
            rowStr += ' ' + grid[i][j] + ' |'
        }
        console.log(rowStr);
        if (i < 3 - 1) {
            console.log('-' + '----'.repeat(3))
        }
    }
};

let playerNameOne = prompt("Player 1, Enter your name. ")

let playerNameTwo = prompt("Player 2, Enter your name. ")

let tossCall = prompt(`${playerNameOne}, call the toss! Please enter either heads or tails! `).trim().toLowerCase();

function coinToss() {
    const randomNum = Math.random()
    if (randomNum < 0.5) {
        return "heads";
    } else {
        return "tails";
    }
};

let tossWinner = ''

function toss() {
    if (tossCall === coinToss()) {
        let tossWinner = playerNameOne
        console.log(`${tossWinner} wins! You may choose first!`)
    } else if (tossCall !== coinToss) {
        let tossWinner = playerNameTwo
        console.log(`${tossWinner} wins! You may choose first!`)
    } else {
        console.log(`Please enter 'heads' or tails' `);
    };
    return tossWinner
}

toss();

let choice = prompt(`${tossWinner} would you like to be noughts or crosses? `).trim().toLowerCase();

if (choice === 'o' || choice === 'noughts') {
    const playerOneSelection = 'O'
    const playerTwoSelection = 'X'
    console.log(`You are ${playerOneSelection}, and ${playerNameTwo} you are ${playerTwoSelection}`);
} else if (choice === 'x'|| choice === 'crosses') {
    const playerOneSelection = 'X'
    const playerTwoSelection ='O'
    console.log(`You are ${playerOneSelection}, and ${playerNameTwo} you are ${playerTwoSelection}`);
} else {
    console.log(`Please type either 'noughts' or 'crosses' /'O' or 'X'. `);
}


console.log(`Hello ${playerNameOne} and ${playerNameTwo}. Ready to play tic-tac-toe? To choose where to put your O or X please type a number from 1-9`)

tttGrid();

