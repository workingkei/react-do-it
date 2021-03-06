// import transactions from './transactionsReducer';
import notification from './notificationReducer';
import searchFilter from './searchFilterReducer';
import createReducers from '../../11/api-redux-pack/createReducers';
import router from './routerReducer';

const apiReducers = createReducers('transactions', 'users');
export default {
  // transactions,
  ...apiReducers,
  notification,
  searchFilter,
  router,
};
