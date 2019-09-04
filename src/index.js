import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import builderReducer from './store/burgerBuilder/reducers/builder';
import ordersReducer from './store/burgerBuilder/reducers/orders';
import demosHeaderReducer from './store/burgerBuilder/reducers/demosHeader';
import authReducer from './store/burgerBuilder/reducers/auth';
import notificationReducer from './store/burgerBuilder/reducers/notification';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    builder: builderReducer,
    orders: ordersReducer,
    demosHeader: demosHeaderReducer,
    auth: authReducer,
    notification: notificationReducer
});
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
