import React from 'react'
import connect from 'react-redux/lib/connect/connect';
import ExpenseForm from "./ExpenseForm";
import { startRemoveExpense, startEditExpense } from '../actions/expenses';
// import { removeExpense } from "../actions/expenses";




const EditExpensePage = (props ) => {
  return (
    <div>
     <div className ='page-header__title'>
     <div className = 'content-container'>
        <h1>Edit Expense</h1>
      </div>
      </div>
     <div className ='content-container'>      
      <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(props.match.params.id, expense));
          props.history.push('/')
          
          console.log('updated', expense)
        }}
        />

      <button className='button button--secondary' onClick={((expense) => {
        props.dispatch(startRemoveExpense({ id: props.expense.id }))
        props.history.push('/')
      })}>Remove Expense</button>
      </div>
    </div>  
  )
}
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}
export default connect(mapStateToProps)(EditExpensePage)