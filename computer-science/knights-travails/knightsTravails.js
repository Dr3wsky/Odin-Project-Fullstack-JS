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

    const newSquare



} 

knightsTravails(start, finish) {
    
}

module.exports = knightsTravails;