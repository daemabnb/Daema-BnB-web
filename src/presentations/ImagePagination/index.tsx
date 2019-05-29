import React from 'react';

import * as S from './styles';

interface Props {
  imageUrls: string[];
  selectedIndex: number;
  onChange: (next: number) => void;
}

type Direction = 1 | -1;

const getNextIndex = (
  index: number,
  direction: Direction,
  arrayLen: number,
) => {
  if (direction === 1) {
    return (index + 1) % arrayLen;
  }
  return index === 0 ? arrayLen - 1 : index - 1;
};

export const ImagePagination: React.FC<Props> = ({
  imageUrls,
  selectedIndex,
  onChange,
}) => {
  const paginationItems = imageUrls.map((imageUrl, index) => (
    <S.PaginationItem key={index} isSelected={index === selectedIndex} />
  ));
  const onClickLeftArrow = onChange.bind(
    null,
    getNextIndex(selectedIndex, -1, imageUrls.length),
  );
  const onClickRightArrow = onChange.bind(
    null,
    getNextIndex(selectedIndex, 1, imageUrls.length),
  );
  return (
    <S.ImagePagination>
      <S.ImagePresenter src={imageUrls[selectedIndex]} />
      <S.LeftArrow onClick={onClickLeftArrow} />
      <S.RightArrow onClick={onClickRightArrow} />
      <S.Pagination>{paginationItems}</S.Pagination>
    </S.ImagePagination>
  );
};
