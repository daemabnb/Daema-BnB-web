import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';
import { Moment } from 'moment';
import { DropdownButton } from '..';

interface DateRangeFilterDropdownButtonProps {
  onApply: (dates: {
    startDate: Moment | null;
    endDate: Moment | null;
  }) => void;
}

interface DateRangeFilterDropdownButtonState {
  startDate: Moment | null;
  endDate: Moment | null;
  focusedInput: 'startDate' | 'endDate';
}

export class DateRangeFilterDropdownButton extends Component<
  DateRangeFilterDropdownButtonProps,
  DateRangeFilterDropdownButtonState
> {
  constructor(props: DateRangeFilterDropdownButtonProps) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: 'startDate',
    };
  }

  private handleDatesChange = (dates: {
    startDate: Moment | null;
    endDate: Moment | null;
  }) => {
    this.setState(dates);
  }

  private handleFocusChange = (
    focusedInput: 'startDate' | 'endDate' | null,
  ) => {
    this.setState({
      focusedInput: !focusedInput ? 'startDate' : focusedInput,
    });
  }

  get datesString() {
    const { startDate, endDate } = this.state;

    const startDateString = startDate ? startDate.format('YYYY-MM-DD') : '';
    const endDateString = endDate ? endDate.format('YYYY-MM-DD') : '';

    if (startDateString) {
      if (startDateString === endDateString) {
        return `${startDateString}`;
      }
      return `${startDateString} ~ ${endDateString}`;
    }
    return '날짜';
  }

  render() {
    const { onApply } = this.props;
    const { startDate, endDate, focusedInput } = this.state;

    return (
      <DropdownButton
        buttonText={this.datesString}
        onClose={onApply.bind(null, { startDate, endDate })}
      >
        <DayPickerRangeController
          minimumNights={0}
          numberOfMonths={2}
          startDate={startDate}
          endDate={endDate}
          onDatesChange={this.handleDatesChange}
          focusedInput={focusedInput}
          onFocusChange={this.handleFocusChange}
        />
      </DropdownButton>
    );
  }
}
