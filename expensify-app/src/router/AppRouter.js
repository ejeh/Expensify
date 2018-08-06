import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import ExpenseDashboard from '../components/ExpenseDasboard';
import AddExpensePage from "../components/AddExpensePage.js";
import EditExpensePage from "../components/EditExpensePage.js";
import NotFoundPage from "../components/NotFoundPage.js";
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from "./PublicRoute";



export const history = createHistory();


const AppRouter = () => (
    // <BrowserRouter>
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true} />
                <PrivateRoute path='/dashboard' component={ExpenseDashboard} />
                <PrivateRoute path='/create' component={AddExpensePage} />
                <PrivateRoute path='/edit/:id' component={EditExpensePage} />
                <Route component={NotFoundPage} />

            </Switch>
        </div>
    </Router>
    // {/* </BrowserRouter> */}

)


export default AppRouter;