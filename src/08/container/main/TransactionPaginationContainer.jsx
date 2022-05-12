import { connect } from 'react-redux';
import TransactionPagination from '../../components/main/TransactionPagination';
import { requestTransactionList } from '../../actions/transactionPackActions';
import { transactionListLoadingStateSelector } from '../../selectors/transactionSelectors';

const mapStateToProps = (state) => {
  const { pagination } = state.transactions;
  const { number } = pagination;
  return {
    pageNumber: number || 1,
    loading: transactionListLoadingStateSelector(state),
  };
};
const mapDispatchToProps = {
  requestTransactionList,
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionPagination);
