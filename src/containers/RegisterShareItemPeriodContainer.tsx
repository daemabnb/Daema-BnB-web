import React from 'react';
import { Moment } from 'moment';
import { RegisterShareItemPeriod } from '../pages';
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
  date: Moment | null;
  period: number;
  isPublic: boolean;
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
        changeDate={this.onChangeDate}
        changePeriod={this.onChangePeriod}
        deleteRegistration={this.onDeleteRegistration}
      />
    );
  }
}

export default connect(
  ({ registration }: StoreState) => {
    const {
      name,
      images,
      explanation,
      price,
      date,
      period,
      isPublic,
    } = registration;
    return {
      name,
      images,
      explanation,
      price,
      date,
      period,
      isPublic,
    };
  },
  (dispatch: any) => ({
    RegisterActions: bindActionCreators(registerActions, dispatch),
  }),
)(RegisterShareItemPeriodContainer);
