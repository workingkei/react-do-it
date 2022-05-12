import { connect } from 'react-redux';
import TransactionPagination from '../../components/main/TransactionPagination';
import {
  FETCH_TRANSACTION_LIST,
  requestTransactionList,
} from '../../actions/transactionPackActions';

const mapStateToProps = (state) => {
  const { pagination, loadingState } = state.transactions;
  const loading = loadingState[FETCH_TRANSACTION_LIST];
  const { number } = pagination;
  return {
    pageNumber: number || 1,
    loading,
  };
};
const mapDispatchToProps = {
  requestTransactionList,
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionPagination);
