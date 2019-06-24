import React from 'react';
import { RegisterSaleItemInfo } from '../pages';
import { connect } from 'react-redux';
import { StoreState } from '../store/modules';
import { actionCreators as registerActions } from '../store/modules/register';
import { bindActionCreators } from 'redux';
import { History } from 'history';

interface Props {
  history: History;
  name: string;
  images: File[];
  explanation: string;
  price: number;
  RegisterActions: typeof registerActions;
}

class RegisterSaleItemInfoContainer extends React.Component<Props> {
  onChangeName = (name: string) => {
    const { RegisterActions } = this.props;
    RegisterActions.changeName(name);
  }
  onChangeImage = (index: number, image: FileList) => {
    const { RegisterActions } = this.props;
    RegisterActions.changeImage(index, image);
  }
  onDeleteImage = (index: number) => {
    const { RegisterActions } = this.props;
    RegisterActions.deleteImage(index);
  }
  onChangeExplanation = (explanation: string) => {
    const { RegisterActions } = this.props;
    RegisterActions.changeExplanation(explanation);
  }
  onChangePrice = (price: number) => {
    const { RegisterActions } = this.props;
    RegisterActions.changePrice(price);
  }
  onDeleteRegistration = () => {
    const { RegisterActions } = this.props;
    RegisterActions.deleteRegistration();
  }
  render() {
    const { name, images, explanation, price, history } = this.props;
    return (
      <RegisterSaleItemInfo
        history={history}
        name={name}
        images={images}
        explanation={explanation}
        price={price}
        changeName={this.onChangeName}
        changeImage={this.onChangeImage}
        deleteImage={this.onDeleteImage}
        changeExplanation={this.onChangeExplanation}
        changePrice={this.onChangePrice}
        onDeleteRegistration={this.onDeleteRegistration}
      />
    );
  }
}

export default connect(
  ({ registration }: StoreState) => {
    const { name, images, explanation, price } = registration;
    return {
      name,
      images,
      explanation,
      price,
    };
  },
  (dispatch: any) => ({
    RegisterActions: bindActionCreators(registerActions, dispatch),
  }),
)(RegisterSaleItemInfoContainer);
