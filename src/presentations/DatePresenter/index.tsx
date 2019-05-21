import React from 'react';

import * as S from './styles';
import { formatDate } from '../../utils/formatDate';

interface Props {
  startDate: Date;
  endDate: Date;
}

export const DatePresenter: React.FC<Props> = ({ startDate, endDate }) => {
  return (
    <S.DatePresenter>
      <S.DateDescription>
        {`
          ${formatDate(startDate)} ~ ${formatDate(endDate)}
        `}
      </S.DateDescription>
    </S.DatePresenter>
  );
};
