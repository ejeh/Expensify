import { createStore } from "redux";


import React from 'react'


//Action generator - function that returns action object
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET',

})
// Reducer
// Reducers are pure function
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: 101
            }
        case "RESET":
            return {
                count: state.count = 0
            }

        default:
            return state;

    }
}

//Create redux store
const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Action
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());



store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));



store.dispatch(setCount({ count: 101 }))

const Store = () => {
    return (
        <div>

        </div>
    )
}




export default Store