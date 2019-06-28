import React from 'react';
import { RegisterSaleItemInfo } from '../pages';
import { connect } from 'react-redux';
import { StoreState } from '../store/modules';
import { actionCreators as registerActions } from '../store/modules/register';
import { actionCreators as userActions } from '../store/modules/user';
import { RouteComponentProps } from 'react-router';
import { registerSaleItem, modifyItemImage } from '../lib';

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
  registerSaleItem = async (
    name: string,
    images: File[],
    explanation: string,
    price: number,
    token: string,
  ) => {
    const imageNames = images.map(image => image.name);
    try {
      const { data: registerSaleItemResponse } = await registerSaleItem(
        name,
        imageNames,
        explanation,
        price,
        token,
      );
      return registerSaleItemResponse.urls;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
  modifyImages = (urls: string[], images: File[]) => {
    try {
      urls.forEach(async (url, i) => {
        await modifyItemImage(url, images[i]);
      });
    } catch (e) {}
  }
  routeToMain = () => {
    this.props.history.push('/');
  }
  render() {
    return (
      <RegisterSaleItemInfo
        {...this.props}
        registerSaleItem={this.registerSaleItem}
        modifyImages={this.modifyImages}
        routeToMain={this.routeToMain}
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
