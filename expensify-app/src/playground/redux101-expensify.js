import React from 'react';
import { createStore, combineReducers } from "redux";

import uuid from "uuid";


// action generator
// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = '', createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }

})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

})

//edit expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//set text filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE 
const sortByDate = () =>({
    type:'SORT_BY_DATE'
})

// SORT_BY_AMOUNT
const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT'
})

//START_DATE
const setStartDate = (startDate) =>({
    type: 'START_DATE',
    startDate,
})


// END_DATE
const setEndtDate = (endDate) =>({
    type: 'END_DATE',
    endDate,
})

const getVisibleState = (expenses, {text, sortBy, startDate, endDate}) =>{
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number'  || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch

    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt  < b.createdAt ? 1: -1
        }
        else if(sortBy ==='amount'){
            return a.amount < b.amount ? 1: -1
        }

    })

}
const expensesDefaultState = []

// expenses Reducer
const expensesReducer = (state = expensesDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense
                }
            })
        
        default:
            return state
    }

}

const filterDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
// filter Reducer
const filterReducer = (state = filterDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return  {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        }

        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy: 'amount'
        } 

        case 'START_DATE':
        return {
            ...state,
            startDate: action.startDate

        }

        case 'END_DATE':
        return {
            ...state,
            endtDate: action.endDate
        }
        default:
            return state
    }

}

//store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    }))

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleState(state.expenses, state.filters)
    console.log(visibleExpenses)

})


const itemOne = store.dispatch(addExpense({ description: 'Rent', createdAt: -21000, amount: 300 }));
const itemTwo = store.dispatch(addExpense({ description: 'Coffee', createdAt: -1000, amount: 100 }));

// store.dispatch(removeExpense({ id: itemOne.expense.id }))
// store.dispatch(editExpense(itemTwo.expense.id, { amount: 300 }))

// store.dispatch(setTextFilter('ke'))
// store.dispatch(setTextFilter(''))

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());

// store.dispatch(setEndtDate(1250));

unsubscribe()

// const demoState = {
//     expenses: [{
//         id: 'rcvhbbjbjj',
//         description: 'January Rent',
//         note: 'This is the final payment for that address',
//         amount: 54500,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined
//     }
// }

const Store2 = () => {
    return (
        <div>

        </div>
    )
}




export default Store2