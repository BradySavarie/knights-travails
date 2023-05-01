function knightMoves(start, end) {
    // Initialize variables and matrices
    const boardSize = 8;
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;
    let queue = [[startRow, startCol]];
    let adjacencyList = createAdjacencyList(boardSize);
    let visited = new Array(boardSize)
        .fill(false)
        .map(() => new Array(boardSize).fill(false));
    let predecessors = Array.from({ length: boardSize }, () =>
        Array.from({ length: boardSize }, () => null)
    );

    // Reject bad coordinates

    const lessThanBoardsize = [startRow, startCol, endRow, endCol].some(
        (num) => num < 0
    );
    const greaterThanBoardsize = [startRow, startCol, endRow, endCol].some(
        (num) => num > 7
    );

    if (lessThanBoardsize || greaterThanBoardsize) {
        return 'Bad coordinates';
    }

    //
    while (queue.length > 0) {
        // Remove and select coordinates from start of queue, update visited array
        const [currentRow, currentCol] = queue.shift();
        visited[currentRow][currentCol] = true;

        // Check for a match
        if (currentRow === endRow && currentCol === endCol) {
            break;
        }

        // Loop through current coordinates adjacency list
        for (const [nextRow, nextCol] of adjacencyList[currentRow][
            currentCol
        ]) {
            // if not visited, update predecessor and push to queue
            if (!visited[nextRow][nextCol]) {
                predecessors[nextRow][nextCol] = [currentRow, currentCol];
                queue.push([nextRow, nextCol]);
            }
        }
    }

    // Reconstruct and store shortest path from start to end coordinate
    const path = [];
    let currentVertex = [endRow, endCol];
    while (currentVertex !== null) {
        path.unshift(currentVertex);
        currentVertex = predecessors[currentVertex[0]][currentVertex[1]];
    }
    return path;
}

function createAdjacencyList(boardSize) {
    // Initialize empty adjacency list
    let adjacencyList = Array.from({ length: boardSize }, () =>
        Array.from({ length: boardSize }, () => [])
    );

    // Populate each square on chessboard with potential moves
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const moves = getMoves([row, col], boardSize);
            adjacencyList[row][col] = moves;
        }
    }

    return adjacencyList;
}

function getMoves(position, boardSize) {
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

module.exports = knightMoves;
