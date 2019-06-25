import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { Moment } from 'moment';
import {
  Button,
  LabeledNumberInput,
  LabeledCheckbox,
} from '../../presentations';
import * as S from './styles';
import { History } from 'history';
import { registerShareItem, modifyItemImage } from '../../lib';

interface Props {
  history: History;
  name: string;
  images: File[];
  explanation: string;
  price: number;
  date: Moment | null;
  period: number;
  isPublic: boolean;
  token: string;
  isAdmin?: boolean;
  changeDate(date: Moment | null): void;
  changePeriod(period: number): void;
  changeIsPublic(isPublic: boolean): void;
  deleteRegistration(): void;
}

export const RegisterShareItemPeriod: React.FC<Props> = ({
  history,
  name,
  images,
  explanation,
  price,
  date,
  period,
  isPublic,
  token,
  isAdmin = false,
  changeDate,
  changePeriod,
  changeIsPublic,
  deleteRegistration,
}) => {
  const [focused, changeFocus] = useState(false);
  const handleChangeFocus = ({ focused }: { focused: boolean | null }) => {
    changeFocus(focused === null ? false : focused);
  };
  const handlePrevPage = () => {
    history.push('/register/share/item');
  };
  const handleNextPage = () => {
    history.push('/');
    deleteRegistration();
  };
  const onRegisterShareItem = () => {
    const imageNames = images.map(image => (image ? image.name : ''));
    const deadline = date ? date.set({ hour: 24 }).valueOf() : 0;
    registerShareItem(
      name,
      imageNames,
      explanation,
      price,
      deadline,
      period,
      isPublic,
      token,
    ).then(res => {
      if (res.status === 201) {
        try {
          res.data.urls.forEach((url, i) => {
            modifyItemImage(url, images[i]);
          });
        } catch (e) {
          console.log(e);
        }
        handleNextPage();
      }
    });
  };
  const CheckBox = isAdmin && (
    <LabeledCheckbox
      isChecked={isPublic}
      onChange={changeIsPublic}
      label="공용물품"
    />
  );
  return (
    <S.RegisterShareItemPeriod>
      <p>제한 날짜</p>
      <SingleDatePicker
        date={date}
        onDateChange={changeDate}
        focused={focused}
        onFocusChange={handleChangeFocus}
        id="12344"
        numberOfMonths={1}
        small={false}
        block={true}
        orientation="horizontal"
        hideKeyboardShortcutsPanel={true}
        placeholder="공유마감기한"
      />
      <LabeledNumberInput
        onChange={changePeriod}
        value={period}
        placeholder="공유기간 (일)"
      />
      {CheckBox}
      <S.ButtonWrapper>
        <Button content="뒤로 가기" onClick={handlePrevPage} />
        <Button content="완료" onClick={onRegisterShareItem} />
      </S.ButtonWrapper>
    </S.RegisterShareItemPeriod>
  );
};
