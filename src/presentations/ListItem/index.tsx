import React from 'react';

import * as S from './styles';
import { formatDate } from '../../utils';

interface Props {
  imageSrc: string;
  itemName: string;
  itemId: string;
  ownerName: string;
  sharedDate: Date;
  returnedDate: Date;
  onClick?: () => void;
}

export const ListItem: React.FC<Props> = ({
  imageSrc,
  itemName,
  itemId,
  ownerName,
  sharedDate,
  returnedDate,
  onClick,
}) => {
  return (
    <S.ListItem onClick={onClick}>
      <S.ListItemImage src={imageSrc} />
      <S.ListItemDescrition>
        <S.ListItemDescritionLeft>
          <S.ListItemName>{itemName}</S.ListItemName>
          <S.ListItemOwner>{ownerName}</S.ListItemOwner>
        </S.ListItemDescritionLeft>
        <S.ListItemDateDescription>
          {formatDate(sharedDate)} ~ {formatDate(returnedDate)}
        </S.ListItemDateDescription>
      </S.ListItemDescrition>
    </S.ListItem>
  );
};
