export type Direction = 'left' | 'right';

export const getNextPaginationIndex = (
  index: number,
  direction: Direction,
  arrayLen: number,
) => {
  if (direction === 'right') {
    return (index + 1) % arrayLen;
  }
  return index === 0 ? arrayLen - 1 : index - 1;
};
