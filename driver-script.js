const knightMoves = require('./knights-travails');

// Input any start and end coordinates into the knightMoves function

let path = knightMoves([0, 0], [0, 0]);

// Driver script below prints output to console

if (path === 'Bad coordinates') {
    console.log(path);
} else {
    let length = path.length - 1;
    let outputMessage = `=> You made it in ${length} moves! Here's your path: `;
    console.log(`Start: [${path[0]}]`);
    console.log(`End: [${path[length]}]`);
    console.log(outputMessage);
    for (const coordinate of path) {
        console.log(coordinate);
    }
}
