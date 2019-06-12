import React from 'react';
import { Moment } from 'moment';
import { RegisterShareItemPeriod } from '../pages';
import { connect } from 'react-redux';
import { StoreState } from '../store/modules';
import { actionCreators as registerActions } from '../store/modules/register';
import { bindActionCreators } from 'redux';
import { History } from 'history';

type FileData = File | undefined;

interface Props {
  history: History;
  name: string;
  images: FileData[];
  explanation: string;
  price: number;
  date: Moment | null;
  period: number;
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
    const { date, period, history } = this.props;
    return (
      <RegisterShareItemPeriod
        history={history}
        date={date}
        period={period}
        changeDate={this.onChangeDate}
        changePeriod={this.onChangePeriod}
        deleteRegistration={this.onDeleteRegistration}
      />
    );
  }
}

export default connect(
  ({ registration }: StoreState) => {
    const { date, period } = registration;
    return {
      date,
      period,
    };
  },
  (dispatch: any) => ({
    RegisterActions: bindActionCreators(registerActions, dispatch),
  }),
)(RegisterShareItemPeriodContainer);
