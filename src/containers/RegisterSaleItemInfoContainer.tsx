import React from 'react';
import { RegisterSaleItemInfo } from '../pages';
import { connect } from 'react-redux';
import { StoreState } from '../store/modules';
import { actionCreators as registerActions } from '../store/modules/register';
import { actionCreators as userActions } from '../store/modules/user';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps {
  name: string;
  images: File[];
  explanation: string;
  price: number;
  token: string;
  deleteRegistration(): void;
  changeName(name: string): void;
  changeImage(index: number, image: FileList): void;
  deleteImage(index: number): void;
  changeExplanation(explanation: string): void;
  changePrice(price: number): void;
}

class RegisterSaleItemInfoContainer extends React.Component<Props> {
  render() {
    const {
      name,
      images,
      explanation,
      price,
      history,
      token,
      deleteRegistration,
      changeName,
      changeImage,
      deleteImage,
      changeExplanation,
      changePrice,
    } = this.props;
    return (
      <RegisterSaleItemInfo
        history={history}
        name={name}
        images={images}
        explanation={explanation}
        price={price}
        token={token}
        changeName={changeName}
        changeImage={changeImage}
        deleteImage={deleteImage}
        changeExplanation={changeExplanation}
        changePrice={changePrice}
        onDeleteRegistration={deleteRegistration}
      />
    );
  }
}

export default connect(
  ({ registration, user }: StoreState) => {
    const { name, images, explanation, price } = registration;
    const { token } = user;
    return {
      name,
      images,
      explanation,
      price,
      token,
    };
  },
  { ...registerActions, ...userActions },
)(RegisterSaleItemInfoContainer);
