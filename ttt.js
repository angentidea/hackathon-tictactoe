
let gridno = 1
function tttGrid() {
    grid = []
    for (let i = 0; i < 3; i++) {
    grid[i] = []
    for (let j = 0; j < 3; j++) {
        grid[i][j] = gridno++;
    }
    }

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

tttGrid()