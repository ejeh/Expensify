import React from 'react';
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";
import connect from 'react-redux/lib/connect/connect';


const AddExpensePage = (props) => {
  return (
    <div>
      <div className='page-header__title'>
        <div className='content-container'>
          <h1>Add Expense</h1>
        </div>
      </div>
      <div className='content-container'>
        <ExpenseForm
          onSubmit={(expense) => {
            props.dispatch(startAddExpense(expense))
            props.history.push('/')
          }}
        />
      </div>
    </div>
  )
}

export default connect()(AddExpensePage);