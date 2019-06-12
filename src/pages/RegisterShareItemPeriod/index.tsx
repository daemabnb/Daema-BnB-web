import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { Moment } from 'moment';
import { Button, LabeledNumberInput } from '../../presentations';
import * as S from './styles';
import { History } from 'history';

interface Props {
  history: History;
  date: Moment | null;
  period: number;
  changeDate(date: Moment | null): void;
  changePeriod(period: number): void;
  deleteRegistration():void;
}

export const RegisterShareItemPeriod: React.FC<Props> = ({
  history,
  date,
  period,
  changeDate,
  changePeriod,
  deleteRegistration,
}) => {
  const [focused, changeFocus] = useState(false);
  const handleChangeFocus = ({ focused }: { focused: boolean | null }) => {
    changeFocus(focused === null ? false : focused);
  };
  const handlePrevPage = () => {
    history.push('/register/share/item');
  };
  const handleNextPage = () => {
    history.push('/');
    deleteRegistration();
  };

  return (
    <div>
      <p>제한 날짜</p>
      <SingleDatePicker
        date={date}
        onDateChange={changeDate}
        focused={focused}
        onFocusChange={handleChangeFocus}
        id="12344"
        numberOfMonths={1}
        small={false}
        block={true}
        orientation="horizontal"
        hideKeyboardShortcutsPanel={true}
        placeholder="공유마감기한"
      />
      <LabeledNumberInput
        onChange={changePeriod}
        value={period}
        placeholder="공유기간 (일)"
      />
      <S.ButtonWrapper>
        <Button content="뒤로 가기" onClick={handlePrevPage} />
        <Button content="완료" onClick={handleNextPage} />
      </S.ButtonWrapper>
    </div>
  );
};

// export class RegisterShareItemPeriod extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       date: null,
//       focused: false,
//       period: 0,
//     };
//   }

//   private handleDateChange = (date: Moment | null) => {
//     this.setState({
//       date,
//     });
//   }

//   private handleFocusChange = ({ focused }: { focused: boolean | null }) => {
//     this.setState({
//       focused: focused === null ? false : focused,
//     });
//   }

//   private handlePeriodChange = (period: number) => {
//     this.setState({
//       period,
//     });
//   }

//   private handlePrevPage = () => {
//     this.props.history.push('/register/share/item');
//   }

//   private handleNextPage = () => {
//     this.props.history.push('/');
//   }

//   render() {
//     return (
//       <div>
//         <p>제한 날짜</p>
//         <SingleDatePicker
//           date={this.state.date}
//           onDateChange={this.handleDateChange}
//           focused={this.state.focused}
//           onFocusChange={this.handleFocusChange}
//           id="12344"
//           numberOfMonths={1}
//           small={false}
//           block={true}
//           orientation="horizontal"
//           hideKeyboardShortcutsPanel={true}
//           placeholder="공유마감기한"
//         />
//         <LabeledNumberInput
//           onChange={this.handlePeriodChange}
//           value={this.state.period}
//           placeholder="공유기간 (일)"
//         />
//         <S.ButtonWrapper>
//           <Button content="뒤로 가기" onClick={this.handlePrevPage} />
//           <Button content="완료" onClick={this.handleNextPage} />
//         </S.ButtonWrapper>
//       </div>
//     );
//   }
// }
