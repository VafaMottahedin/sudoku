import { BLANK_TILE_VAL } from '../Constants';

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
      onSetValue(Number(BLANK_TILE_VAL));
      return;
    }
    let convertedVal = Number(newVal);
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
        value={value !== BLANK_TILE_VAL ? value : ''}
        onChange={(e) => handleChange(e.target.value)}
        readOnly={value === answer}
      />
    </div>
  );
};

export default Tile;
