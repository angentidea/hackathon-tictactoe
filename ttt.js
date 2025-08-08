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
}

tttGrid();