import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";


const ExpenseList = (props) => {
    return (
        <div>
            <div className='expense__header'>
                <div className='show-for-mobile'>Expense</div>
                <div className='show-for-desktop'>Expense</div>
                <div className='show-for-desktop'>Amount</div>
            </div>
            <div className = 'list-body'>
                {
                    props.expenses.length === 0 ? (
                        <div className='list-item list-item--message'>
                            <p>No expense</p>
                        </div>
                    ) : (

                            props.expenses.map((expense, index) => {
                                return <ExpenseListItem key={index} {...expense} />

                            })
                        )
                }

            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)

