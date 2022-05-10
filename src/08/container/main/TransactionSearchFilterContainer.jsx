import { connect } from 'react-redux';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
// import { setTransactionList } from '../../actions/transactionActions';
import { requestTransactionList } from '../../actions/transactionActions';

export default connect(null, { requestTransactionList })(TransactionSearchFilter);
// export default connect(null, { setTransactionList })(TransactionSearchFilter);
