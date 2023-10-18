// JS solution to Knights Travails problem in the Odin Projct curriculum,
// Using JoshDevHub(https://github.com/JoshDevHub/Knight-Travails-JS/tree/main)'s method with slight modifications

const squareRegistry = new Map();

// Chess Square factory
const ChessSquare = (x, y) => {
        const xPos = x; 
        const yPos = y;
        let predecessor;

        const OFFSETS = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1], [-2, -1]
        ];    

    const getPredecessor = () => predecessor;
    const setPredecessor = (newPred) => { predecessor ||= newPred };

    // Prints xy coordinates of square
    const name = () => `${x}, ${y}`

    // Returns array of possible moves by filtering the impossibilities (null) from offset options
    const createMoves = () => {
        return OFFSETS.map(newSquare).filter(Boolean);
    }

    // returns new square if within board bounds
    const newSquare = ([xOffset, yOffset]) => {
        const [newX, newY] = [xPos + xOffset, yPos + yOffset];
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            return ChessSquare(newX, newY);
        };
    }

    // Return existing square registry or create new registry from square
    if (squareRegistry.has(name())) {
        return squareRegistry.get(name());
    } else {
        const newSquare = {name, getPredecessor, setPredecessor, createMoves}
        squareRegistry.set(name(), newSquare);
        return newSquare;
    }
} 

knightsTravails(start, finish) {
    
}

module.exports = knightsTravails;