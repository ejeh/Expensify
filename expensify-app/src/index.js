import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppRouter, { history } from "./router/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import getVisibleState from "./selectors/expenses";
import { firebase } from "./firebase/firebase";
import Loading from "./components/Loading";
// import uuid from "uuid";

import 'normalize.css';
import './css/style.css';

const store = configureStore();

// store.dispatch(addExpense({ 'description': 'water bill', 'amount': 4500 }))
// store.dispatch(addExpense({ 'description': 'electricity bill', 'createdAt': 1000 }))
// store.dispatch(addExpense({ 'description': 'rent', 'amount': 109500 }))


const state = store.getState();
const visibleExpense = getVisibleState(state.expenses, state.filters)

console.log(visibleExpense)

const Jsx = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRenderApp = false;
const renderApp = () => {
    if (!hasRenderApp) {
        ReactDOM.render(<Jsx />, document.getElementById('root'));
        hasRenderApp = true;
    }
}

ReactDOM.render(<Loading/>, document.getElementById('root'));


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard')
            }

        });
    } else {
        store.dispatch(logout())
        renderApp();
        history.push('/')
    }
})

