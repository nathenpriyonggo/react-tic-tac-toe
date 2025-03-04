const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ onSelectSquare, turns }) {
    
    let gameBoard = initialGameBoard;
    for (const turn of turns) {
        gameBoard[turn.square.row][turn.square.col] = turn.player
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) =>
                    <li key={colIndex}>
                        <button 
                            onClick={() => onSelectSquare(rowIndex, colIndex)} 
                            disabled={playerSymbol !== null ? true : false}
                        >
                            {playerSymbol}
                        </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}