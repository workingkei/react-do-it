// import transactions from './transactionsReducer';
import notification from './notificationReducer';
import searchFilter from './searchFilterReducer';
import createReducers from '../../11/api-redux-pack/createReducers';

const apiReducers = createReducers('transactions');
export default {
  // transactions,
  ...apiReducers,
  notification,
  searchFilter,
};
