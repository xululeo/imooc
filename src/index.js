import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducer';
import {createStore, applyMiddleware} from 'redux';
import AuthRoute from './component/authroute/authroute'
import thunk from "redux-thunk";
import './index.css';
import {BrowserRouter, Route, Link, Redirect, Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import Login from './container/login/login';
import Register from './container/register/register'
import './config'

const store = createStore(reducers, applyMiddleware(thunk));

function Boss(){
    return <h2>BOSS</h2>
}
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path='/Boss' component={Boss}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>

            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)




