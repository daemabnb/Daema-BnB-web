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
  images: FileData[];
  explanation: string;
  price: number;
  changeName(name: string): void;
  changeImage(index: number, image: FileList): void;
  deleteImage(index: number): void;
  changeExplanation(explanation: string): void;
  changePrice(price: number): void;
}

type FileData = File | undefined;

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

// export class RegisterShareItemInfo extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       name: '',
//       images: [],
//       explanation: '',
//       price: 0,
//     };
//   }

//   private handleChangeName = (name: string) => {
//     this.setState({
//       name,
//     });
//   }

//   private handleChangeImage = (index: number, file: FileList) => {
//     const newFiles = [...this.state.images];
//     newFiles[index] = file[0];
//     this.setState({
//       images: newFiles,
//     });
//   }

//   private handleChangeExplanation = (explanation: string) => {
//     this.setState({
//       explanation,
//     });
//   }

//   private handleChangePrice = (price: number) => {
//     this.setState({
//       price,
//     });
//   }

//   private handleDeleteImage = (index: number) => {
//     const newFiles = [...this.state.images];
//     newFiles.splice(index, 1);
//     this.setState({
//       images: newFiles,
//     });
//   }

//   private handleNextPage = () => {
//     this.props.history.push('/register/share/period');
//   }

//   render() {
//     const imageUploaders = this.state.images.map((image, i) => (
//       <ImageUploader
//         onChange={this.handleChangeImage.bind(null, i)}
//         onDelete={this.handleDeleteImage.bind(null, i)}
//         id={i.toString()}
//         image={image}
//         key={i}
//       />
//     ));
//     return (
//       <div>
//         <LabeledTextInput
//           value={this.state.name}
//           onChange={this.handleChangeName}
//           placeholder="상품명을 입력해주세요"
//           label="상품명"
//         />
//         {imageUploaders}
//         <ImageUploader
//           onChange={this.handleChangeImage.bind(null, this.state.images.length)}
//           onDelete={this.handleDeleteImage.bind(null, this.state.images.length)}
//           id="1234567"
//           image={this.state.images[this.state.images.length]}
//         />
//         <LabeledDescriptionInput
//           value={this.state.explanation}
//           onChange={this.handleChangeExplanation}
//           placeholder="설명을 입력해주세요"
//           label="설명"
//         />
//         <LabeledPriceInput
//           value={this.state.price}
//           onChange={this.handleChangePrice}
//           placeholder="0"
//           label="가격"
//         />
//         <S.ButtonWrapper>
//           <Button content="다음" onClick={this.handleNextPage} />
//         </S.ButtonWrapper>
//       </div>
//     );
//   }
// }
