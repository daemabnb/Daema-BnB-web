import React from 'react';
import { Moment } from 'moment';
import { RegisterShareItemInfo } from '../pages';
import { connect } from 'react-redux';
import { StoreState } from '../store/modules';
import { actionCreators as registerActions } from '../store/modules/register';
import { RouteComponentProps } from 'react-router';
import { registerShareItem, modifyItemImage } from '../lib';

interface Props extends RouteComponentProps {
  name: string;
  images: File[];
  explanation: string;
  price: number;
  date: Moment | null;
  period: number;
  isPublic: boolean;
  token: string;
  isAdmin: boolean;
  deleteRegistration(): void;
  changeName(name: string): void;
  changeImage(index: number, image: FileList): void;
  deleteImage(index: number): void;
  changeExplanation(explanation: string): void;
  changePrice(price: number): void;
  changeDate(date: Moment | null): void;
  changePeriod(period: number): void;
  changeIsPublic(isPublic: boolean): void;
}

class RegisterShareItemInfoContainer extends React.Component<Props> {
  registerShareItem = async (
    name: string,
    images: File[],
    explanation: string,
    price: number,
    date: Moment | null,
    period: number,
    isPublic: boolean,
    token: string,
  ) => {
    const imageNames = images.map(image => image.name);
    const deadline = date ? date.set({ hour: 24 }).valueOf() : 0;
    try {
      const registerItemResponse = await registerShareItem(
        name,
        imageNames,
        explanation,
        price,
        deadline,
        period,
        isPublic,
        token,
      );
      return registerItemResponse.data.urls;
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
    const {
      history,
      name,
      images,
      explanation,
      price,
      date,
      period,
      isPublic,
      token,
      isAdmin,
      deleteRegistration,
      changeName,
      changeImage,
      deleteImage,
      changeExplanation,
      changePrice,
      changeDate,
      changePeriod,
      changeIsPublic,
    } = this.props;
    return (
      <RegisterShareItemInfo
        history={history}
        name={name}
        images={images}
        explanation={explanation}
        price={price}
        date={date}
        period={period}
        isPublic={isPublic}
        token={token}
        isAdmin={isAdmin}
        changeName={changeName}
        changeImage={changeImage}
        deleteImage={deleteImage}
        changeExplanation={changeExplanation}
        changePrice={changePrice}
        changeDate={changeDate}
        changePeriod={changePeriod}
        changeIsPublic={changeIsPublic}
        deleteRegistration={deleteRegistration}
        registerShareItem={this.registerShareItem}
        modifyImages={this.modifyImages}
        routeToMain={this.routeToMain}
      />
    );
  }
}

export default connect(
  ({ registration, user }: StoreState) => {
    const {
      name,
      images,
      explanation,
      price,
      date,
      period,
      isPublic,
    } = registration;
    const { token, isAdmin } = user;
    return {
      name,
      images,
      explanation,
      price,
      date,
      period,
      isPublic,
      token,
      isAdmin,
    };
  },
  registerActions,
)(RegisterShareItemInfoContainer);
