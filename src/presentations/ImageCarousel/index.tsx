import React, { useState } from 'react';

import * as S from './styles';
import { getNextPaginationIndex } from '../../utils';

interface Props {
  imageUrls: string[];
}

export const ImageCarousel: React.FC<Props> = ({ imageUrls }) => {
  const [selectedIndex, onChangeIndex] = useState(0);
  const pageIndicatorDots = imageUrls.map((imageUrl, index) => (
    <S.PageIndicatorDot key={index} isSelected={index === selectedIndex} />
  ));
  const onClickLeftArrow = onChangeIndex.bind(
    null,
    getNextPaginationIndex(selectedIndex, 'left', imageUrls.length),
  );
  const onClickRightArrow = onChangeIndex.bind(
    null,
    getNextPaginationIndex(selectedIndex, 'right', imageUrls.length),
  );
  return (
    <S.ImageCarousel>
      <S.ImagePresenter src={imageUrls[selectedIndex]} />
      <S.LeftArrow onClick={onClickLeftArrow} />
      <S.RightArrow onClick={onClickRightArrow} />
      <S.PageIndicator>{pageIndicatorDots}</S.PageIndicator>
    </S.ImageCarousel>
  );
};
