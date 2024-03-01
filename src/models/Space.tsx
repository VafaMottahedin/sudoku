interface Space {
  isSelected: boolean;
  isHighlighted: boolean;
  isSectionHighlighted: boolean;
  value: number; // displayed
  answer: number; // the correct answer, hidden
  row: number;
  col: number;
  section: number;
}

export default Space;
