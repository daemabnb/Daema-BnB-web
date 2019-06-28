import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { Moment } from 'moment';
import {
  LabeledTextInput,
  LabeledPriceInput,
  LabeledDescriptionInput,
  ImageUploader,
  Button,
  LabeledNumberInput,
  LabeledCheckbox,
} from '../../presentations';
import * as S from './styles';
import {
  RegistrationState,
  RegisterActionCreators,
} from '../../store/modules/register';

interface Props extends RegistrationState, RegisterActionCreators {
  token: string;
  isAdmin: boolean;
  registerShareItem(
    name: string,
    images: File[],
    explanation: string,
    price: number,
    date: Moment | null,
    period: number,
    isPublic: boolean,
    token: string,
  ): Promise<string[]>;
  modifyImages(urls: string[], images: File[]): void;
  routeToMain(): void;
}

export const RegisterShareItemInfo: React.FC<Props> = ({
  name,
  images,
  explanation,
  price,
  date,
  period,
  isPublic,
  token,
  isAdmin,
  changeName,
  changeImage,
  deleteImage,
  changeExplanation,
  changePrice,
  changeDate,
  changePeriod,
  changeIsPublic,
  deleteRegistration,
  registerShareItem,
  modifyImages,
  routeToMain,
}) => {
  const imageUploaders = images.map((image, i) => (
    <ImageUploader
      onChange={changeImage.bind(null, i)}
      onDelete={deleteImage.bind(null, i)}
      id={i.toString()}
      image={image}
      key={i}
    />
  ));
  const isCoverImage = images.length === 0;
  const [focused, changeFocus] = useState(false);
  const handleChangeFocus = ({ focused }: { focused: boolean | null }) => {
    changeFocus(focused === null ? false : focused);
  };
  const checkBox = isAdmin && (
    <LabeledCheckbox
      isChecked={isPublic}
      onChange={changeIsPublic}
      label="공용물품"
    />
  );
  const onRegisterShareItem = async () => {
    const imageUrls = await registerShareItem(
      name,
      images,
      explanation,
      price,
      date,
      period,
      isPublic,
      token,
    );
    modifyImages(imageUrls, images);
    deleteRegistration();
    routeToMain();
  };
  return (
    <S.RegisterShareItemInfo>
      <LabeledTextInput
        value={name}
        onChange={changeName}
        placeholder="상품명을 입력해주세요"
        label="상품명"
      />
      {imageUploaders}
      <ImageUploader
        onChange={changeImage.bind(null, images.length)}
        onDelete={deleteImage.bind(null, images.length)}
        id="share-item-image-uploader"
        image={images[images.length]}
        isCoverImage={isCoverImage}
      />
      <LabeledDescriptionInput
        value={explanation}
        onChange={changeExplanation}
        placeholder="설명을 입력해주세요"
        label="설명"
      />
      <LabeledPriceInput
        value={price}
        onChange={changePrice}
        placeholder="0"
        label="가격"
      />
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
      {checkBox}
      <S.ButtonWrapper>
        <Button content="완료" onClick={onRegisterShareItem} size="big" />
      </S.ButtonWrapper>
    </S.RegisterShareItemInfo>
  );
};
