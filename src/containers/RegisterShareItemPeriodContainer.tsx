import React from 'react';
import { Moment } from 'moment';
import { RegisterShareItemPeriod } from '../pages';
import { connect } from 'react-redux';
import { StoreState } from '../store/modules';
import { actionCreators as registerActions } from '../store/modules/register';
import { bindActionCreators } from 'redux';
import { RouteComponentProps } from 'react-router';

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
  RegisterActions: typeof registerActions;
}

class RegisterShareItemPeriodContainer extends React.Component<Props> {
  onChangeDate = (date: Moment | null) => {
    const { RegisterActions } = this.props;
    RegisterActions.changeDate(date);
  }
  onChangePeriod = (period: number) => {
    const { RegisterActions } = this.props;
    RegisterActions.changePeriod(period);
  }
  onChangeIsPublic = (isPuiblic: boolean) => {
    const { RegisterActions } = this.props;
    RegisterActions.changeIsPublic(isPuiblic);
  }
  onDeleteRegistration = () => {
    const { RegisterActions } = this.props;
    RegisterActions.deleteRegistration();
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
    } = this.props;
    return (
      <RegisterShareItemPeriod
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
        changeDate={this.onChangeDate}
        changePeriod={this.onChangePeriod}
        changeIsPublic={this.onChangeIsPublic}
        deleteRegistration={this.onDeleteRegistration}
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
  (dispatch: any) => ({
    RegisterActions: bindActionCreators(registerActions, dispatch),
  }),
)(RegisterShareItemPeriodContainer);
