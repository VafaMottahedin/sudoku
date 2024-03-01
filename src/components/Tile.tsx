interface Props {
  value: number;
  answer: number;
  row: number;
  col: number;
  section: number;
  onSetValue: (value: number) => void;
  isSelected: boolean;
  onSetIsSelected: (isSelected: boolean) => void;
  isHighlighted: boolean;
  isSectionHighlighted: boolean;
}

const Tile = ({
  value,
  answer,
  onSetValue,
  isSelected,
  onSetIsSelected,
  isHighlighted,
  isSectionHighlighted,
}: Props) => {
  const handleChange = (newVal: string) => {
    if (newVal === '') {
      onSetValue(Number(-1));
      return;
    }
    let convertedVal = Number(newVal);
    // console.log(`new val: ${convertedVal}`);
    if (
      !isNaN(convertedVal) &&
      [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(convertedVal) &&
      convertedVal >= 1
    ) {
      onSetValue(Number(convertedVal));
    }
  };

  const determineClasses = (
    isSelected: boolean,
    isHighlighted: boolean
  ): string => {
    let classes = 'tile';
    classes += isSelected ? ' selected' : '';
    classes += isHighlighted && !isSelected ? ' highlighted' : '';
    classes += isSectionHighlighted && !isSelected ? ' section' : '';
    return classes;
  };

  return (
    <div
      className={determineClasses(isSelected, isHighlighted)}
      onFocus={() => onSetIsSelected(true)}
      onBlur={() => onSetIsSelected(false)}
    >
      <input
        className={value === answer ? 'correct' : 'incorrect'}
        type="number"
        min="1"
        max="9"
        value={value !== -1 ? value : ''}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Tile;
