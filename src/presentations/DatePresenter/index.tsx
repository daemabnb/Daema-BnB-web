import React from 'react';

import * as S from './styles';
import { formatDate } from '../../utils';

interface DatePresenterProps {
  startDate: Date;
  endDate: Date;
}

export const DatePresenter: React.FC<DatePresenterProps> = ({
  startDate,
  endDate,
}) => {
  return (
    <S.DatePresenter>
      {formatDate(startDate)} ~ {formatDate(endDate)}
    </S.DatePresenter>
  );
};
