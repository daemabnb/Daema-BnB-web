import React from 'react';
import * as S from './styles';
import {
  LabeledTextInput,
  LabeledPriceInput,
  LabeledDescriptionInput,
  ImageUploader,
  Button,
} from '../../presentations';

interface Props {
  name: string;
  images: File[];
  explanation: string;
  price: number;
  token: string;
  changeName(name: string): void;
  changeImage(index: number, image: FileList): void;
  deleteImage(index: number): void;
  changeExplanation(explanation: string): void;
  changePrice(price: number): void;
  deleteRegistration(): void;
  registerSaleItem(
    name: string,
    images: File[],
    explanation: string,
    price: number,
    token: string,
  ): Promise<string[]>;
  modifyImages(urls: string[], images: File[]): void;
  routeToMain(): void;
}

export const RegisterSaleItemInfo: React.FC<Props> = ({
  name,
  images,
  explanation,
  price,
  token,
  changeName,
  changeImage,
  deleteImage,
  changeExplanation,
  changePrice,
  deleteRegistration,
  registerSaleItem,
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
  const onRegisterSaleItem = async () => {
    const imageUrls = await registerSaleItem(name, images, explanation, price, token);
    modifyImages(imageUrls, images);
    deleteRegistration();
    routeToMain();
  };
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
        id="sale-item-image-uploader"
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
      <Button size="big" content="완료" onClick={onRegisterSaleItem} />
    </S.RegisterSaleItemInfo>
  );
};
