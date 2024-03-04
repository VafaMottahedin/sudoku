import Tile from './Tile';
import Space from '../models/Space';

interface Props {
  spaces: Space[];
  setSpaces: (spaces: Space[]) => void;
}

const GameBoard = ({ spaces, setSpaces }: Props) => {
  const handleSetValue = (index: number, value: number) => {
    const updatedSpaces = [...spaces];
    updatedSpaces[index] = { ...updatedSpaces[index], value: value };

    setSpaces(updatedSpaces);
  };

  const handleSetIsSelected = (index: number, isSelected: boolean) => {
    const updatedSpaces = [...spaces];

    // Selected element
    updatedSpaces[index] = { ...updatedSpaces[index], isSelected: isSelected };

    updatedSpaces.map((updatedSpace) => {
      updatedSpace.isHighlighted =
        updatedSpace.col === updatedSpaces[index].col ||
        updatedSpace.row === updatedSpaces[index].row;

      updatedSpace.isSectionHighlighted =
        updatedSpace.section === updatedSpaces[index].section;
    });

    setSpaces(updatedSpaces);
  };

  return (
    <div className="board">
      {spaces.map((space, i) => {
        {
          return (
            <Tile
              key={i}
              value={space.value}
              answer={space.answer}
              row={space.row}
              col={space.col}
              section={space.section}
              onSetValue={(value) => handleSetValue(i, value)}
              isSelected={space.isSelected}
              onSetIsSelected={(isSelected) =>
                handleSetIsSelected(i, isSelected)
              }
              isHighlighted={space.isHighlighted}
              isSectionHighlighted={space.isSectionHighlighted}
            />
          );
        }
      })}
    </div>
  );
};

export default GameBoard;
