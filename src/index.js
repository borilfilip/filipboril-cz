import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider as ReduxProvider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import builderReducer from './store/burgerBuilder/reducers/builder';
import ordersReducer from './store/burgerBuilder/reducers/orders';
import demosHeaderReducer from './store/burgerBuilder/reducers/demosHeader';
import authReducer from './store/burgerBuilder/reducers/auth';
import notificationReducer from './store/burgerBuilder/reducers/notification';
import thunk from 'redux-thunk';
import messages_en from "./translations/en.json";
import messages_cs from "./translations/cs.json";

// Redux
const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

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

// Language
const messages = {
  'cs': messages_cs,
  'en': messages_en
};

const language = navigator.language.split(/[-_]/)[0];

// App
const app = (
  <ReduxProvider store={store}>
    <App language={language} messages={messages}/>
  </ReduxProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
