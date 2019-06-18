import React from 'react';
import { History } from 'history';

import {
  LabeledTextInput,
  LabeledPriceInput,
  LabeledDescriptionInput,
  ImageUploader,
  Button,
} from '../../presentations';
import * as S from './styles';

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
}

export const RegisterShareItemInfo: React.FC<Props> = ({
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
}) => {
  const handleNextPage = () => {
    history.push('/register/share/period');
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
    <div>
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
      <S.ButtonWrapper>
        <Button content="다음" onClick={handleNextPage} />
      </S.ButtonWrapper>
    </div>
  );
};
