import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import notificationEffects from '../middlewares/notificationEffects';
import transactionEffect from '../middlewares/transactionEffect';
import { middleware as reduxPackMiddleware } from 'redux-pack';

export default (initStates) =>
  createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(
      applyMiddleware(thunk, reduxPackMiddleware, notificationEffects, transactionEffect),
    ),
  );
