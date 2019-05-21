import React from 'react';
import { toString } from '../../utils';
import * as S from './style';

interface DeletableImagePreviewProps {
  onDelete(): void;
  image: File;
}

export const DeletableImagePreview: React.FC<DeletableImagePreviewProps> = ({
  onDelete,
  image,
}) => {
  return (
    <S.ImagePreview backgroundImageUrl={toString(image)}>
      <S.DeleteImageButton onClick={onDelete} />
    </S.ImagePreview>
  );
};
