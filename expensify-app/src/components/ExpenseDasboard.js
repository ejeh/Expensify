import React from 'react'
import ExpenseList from './ExpenseList';
import ExpenseListFilter from "./ExpenseListFilter";
import { Link } from 'react-router-dom';

const ExpenseDashboard = (props) => {
    return (
        <div>
            <div className='page-header__title'>
                <div className='content-container'>
                    <h1>This is the react router dashboard</h1>
                    <Link className='page-header__actions' to='/create'>Add Expense</Link>
                </div>
            </div>
            <div className='content-container'>

                <ExpenseListFilter />
                <ExpenseList />

            </div>
        </div>

    )
}
export default ExpenseDashboard;






