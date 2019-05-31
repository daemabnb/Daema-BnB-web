type Direction = 1 | -1;

export const getNextPaginationIndex = (
  index: number,
  direction: Direction,
  arrayLen: number,
) => {
  if (direction === 1) {
    return (index + 1) % arrayLen;
  }
  return index === 0 ? arrayLen - 1 : index - 1;
};
