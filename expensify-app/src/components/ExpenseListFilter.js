import React, { Component } from "react";
import connect from "react-redux/lib/connect/connect";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from "react-dates";





class ExpenseListFilter extends Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));

    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    render() {
        return (
                <div className='input-group'>
                    <input className= 'input-group__item' type='search' value={this.props.filters.text} placeholder='Search expense' onChange={((e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    })} />

                    <select
                        value={this.props.filters.sortBy}
                        onChange={((e) => {
                            if (e.target.value === 'date') {
                                return this.props.dispatch(sortByDate())

                            } else if (e.target.value === 'amount') {
                                return this.props.dispatch(sortByAmount())

                            } else {
                                return e
                            }

                        })}
                    >
                        <option value='date' >Date</option>
                        <option value='amount'>Amount</option>
                    </select>
                    <div className='date-picker'>
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />
                    </div>

                </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(ExpenseListFilter);