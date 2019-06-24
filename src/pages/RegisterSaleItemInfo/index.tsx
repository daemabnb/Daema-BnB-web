import React from 'react';
import { History } from 'history';
import * as S from './styles';
import {
  LabeledTextInput,
  LabeledPriceInput,
  LabeledDescriptionInput,
  ImageUploader,
  Button,
} from '../../presentations';
import {
  registerSaleItem,
  getLocalStorageItem,
  modifyItemImage,
} from '../../lib';

interface Props {
  history: History;
  name: string;
  images: File[];
  explanation: string;
  price: number;
  changeName(name: string): void;
  changeImage(index: number, image: FileList): void;
  deleteImage(index: number): void;
  changeExplanation(explanation: string): void;
  changePrice(price: number): void;
  onDeleteRegistration(): void;
}

export const RegisterSaleItemInfo: React.FC<Props> = ({
  history,
  name,
  images,
  explanation,
  price,
  changeName,
  changeImage,
  deleteImage,
  changeExplanation,
  changePrice,
  onDeleteRegistration,
}) => {
  const handleNextPage = () => {
    history.push('/');
  };
  const onRegister = () => {
    const token = getLocalStorageItem('token') || '';
    registerSaleItem(
      name,
      images.map(image => image.name),
      explanation,
      price,
      token,
    ).then(res => {
      try {
        res.data.urls.forEach((url, i) => {
          modifyItemImage(url, images[i]);
        });
        onDeleteRegistration();
        handleNextPage();
      } catch (e) {
        console.log(e);
      }
    });
  };
  const imageUploaders = images.map((image, i) => (
    <ImageUploader
      onChange={changeImage.bind(null, i)}
      onDelete={deleteImage.bind(null, i)}
      id={i.toString()}
      image={image}
      key={i}
    />
  ));
  return (
    <S.RegisterSaleItemInfo>
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
        id="1234567"
        image={images[images.length]}
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
      <Button size="big" content="완료" onClick={onRegister} />
    </S.RegisterSaleItemInfo>
  );
};
