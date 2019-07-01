import React from 'react';
import { Moment } from 'moment';
import { RegisterShareItemInfo } from '../pages';
import { connect } from 'react-redux';
import { StoreState } from '../store/modules';
import {
  ShareItemState,
  actionCreators as shareItemActions,
  ShareItemActionCreators,
} from '../store/modules/shareItem';
import { RouteComponentProps } from 'react-router';
import { registerShareItem, modifyItemImage } from '../lib';

interface Props
  extends RouteComponentProps,
    ShareItemState,
    ShareItemActionCreators {
  token: string;
  isAdmin: boolean;
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
      const { data: registerShareItemResponse } = await registerShareItem(
        name,
        imageNames,
        explanation,
        price,
        deadline,
        period,
        isPublic,
        token,
      );
      return registerShareItemResponse.urls;
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
      <RegisterShareItemInfo
        {...this.props}
        registerShareItem={this.registerShareItem}
        modifyImages={this.modifyImages}
        routeToMain={this.routeToMain}
      />
    );
  }
}

export default connect(
  ({ shareItem, user }: StoreState) => {
    return {
      ...user,
      ...shareItem,
    };
  },
  shareItemActions,
)(RegisterShareItemInfoContainer);
