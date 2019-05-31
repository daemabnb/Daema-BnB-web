import React, { useState } from 'react';

import * as S from './styles';
import { getNextPaginationIndex } from '../../utils';

interface Props {
  imageUrls: string[];
}

export const ImagePagination: React.FC<Props> = ({ imageUrls }) => {
  const [selectedIndex, onChangeIndex] = useState(0);
  const paginationItems = imageUrls.map((imageUrl, index) => (
    <S.PaginationItem key={index} isSelected={index === selectedIndex} />
  ));
  const onClickLeftArrow = onChangeIndex.bind(
    null,
    getNextPaginationIndex(selectedIndex, -1, imageUrls.length),
  );
  const onClickRightArrow = onChangeIndex.bind(
    null,
    getNextPaginationIndex(selectedIndex, 1, imageUrls.length),
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
