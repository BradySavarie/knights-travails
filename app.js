const boardSize = 8;

function knightMoves(start, end) {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;
    let adjacencyList = createAdjacencyList();
    let visited = new Array(boardSize)
        .fill(false)
        .map(() => new Array(boardSize).fill(false));
    console.log(visited);
}

function createAdjacencyList() {
    // Initialize empty adjacency list
    let adjacencyList = Array.from({ length: boardSize }, () =>
        Array.from({ length: boardSize }, () => [])
    );

    // Populate each square on chessboard with potential moves
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const moves = getMoves([row, col]);
            adjacencyList[row][col] = moves;
        }
    }

    return adjacencyList;
}

function getMoves(position) {
    // Generate all possible knight moves from a given position
    const [row, col] = position;
    const moves = [];
    const deltas = [
        [-2, -1],
        [-2, 1],
        [-1, -2],
        [-1, 2],
        [1, -2],
        [1, 2],
        [2, -1],
        [2, 1],
    ];

    // For each possible move, calculate new coordinates
    for (const delta of deltas) {
        let newRow = row + delta[0];
        let newCol = col + delta[1];
        // Check if coordinates are on the board, push to array if true
        if (
            newRow >= 0 &&
            newRow < boardSize &&
            newCol >= 0 &&
            newCol < boardSize
        ) {
            moves.push([newRow, newCol]);
        }
    }

    return moves;
}

knightMoves([0, 0], [1, 2]);
