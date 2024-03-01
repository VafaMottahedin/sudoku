# Sudoku

Built using `React` for my own practice and learning. Choose difficulty to start a new game.

## Implementation Details

### Sudoku logic

Built using `sudoku-gen` to generate the puzzle.

### Styling

Uses `bootstrap` for buttons, font, etc.

## Features to add

- Winning state
- Timer
- Hints
- Maximum number of wrong answers
- Better styling
  - Colors are kind of ugly
  - Borders around 3x3 sections

## Bugs

- Can enter `+`, `-`, `e` in input fields
  - See [https://stackoverflow.com/questions/31706611/why-does-the-html-input-with-type-number-allow-the-letter-e-to-be-entered-in](https://stackoverflow.com/questions/31706611/why-does-the-html-input-with-type-number-allow-the-letter-e-to-be-entered-in) for details
- Empty input field is styled as `incorrect` answer
