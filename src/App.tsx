import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Space from './models/Space';
import { BLANK_TILE_VAL, NUM_COLS, NUM_ROWS } from './Constants';
import { getSudoku } from 'sudoku-gen';
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

function App() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [spaces, setSpaces] = useState<Space[]>();

  function newGame() {
    let initialSpaces: Space[] = [];
    const sudoku = getSudoku(difficulty);
    for (let i = 0; i < NUM_ROWS; i++) {
      for (let j = 0; j < NUM_COLS; j++) {
        initialSpaces.push({
          isSelected: false,
          isHighlighted: false,
          isSectionHighlighted: false,
          value:
            sudoku.puzzle[i * NUM_COLS + j] === '-'
              ? BLANK_TILE_VAL
              : parseInt(sudoku.puzzle[i * NUM_COLS + j], 10),
          answer: parseInt(sudoku.solution[i * NUM_COLS + j], 10),
          row: i,
          col: j,
          section: Math.floor(i / 3) * 3 + Math.floor(j / 3),
        });
      }
    }
    return initialSpaces;
  }

  return (
    <>
      <h1>Sudoku</h1>
      <div className="btn-group">
        <button
          className={`btn btn-primary ${difficulty === 'easy' ? 'active' : ''}`}
          type="button"
          onClick={() => {
            setDifficulty('easy');
          }}
        >
          Easy
        </button>
        <button
          className={`btn btn-primary ${
            difficulty === 'medium' ? 'active' : ''
          }`}
          type="button"
          onClick={() => {
            setDifficulty('medium');
          }}
        >
          Medium
        </button>
        <button
          className={`btn btn-primary ${difficulty === 'hard' ? 'active' : ''}`}
          type="button"
          onClick={() => {
            setDifficulty('hard');
          }}
        >
          Hard
        </button>
        <button
          className={`btn btn-primary ${
            difficulty === 'expert' ? 'active' : ''
          }`}
          type="button"
          onClick={() => {
            setDifficulty('expert');
          }}
        >
          Expert
        </button>
      </div>
      <div className="new-game">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            setSpaces(newGame);
          }}
        >
          New Game
        </button>
      </div>
      <main>
        {spaces && <GameBoard spaces={spaces} setSpaces={setSpaces} />}
      </main>
    </>
  );
}

export default App;
