import React, { PureComponent } from 'react';
import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';
// import TransactionSearchFilter from './TransactionSearchFilter';
import TransactionTable from './TransactionTable';
// import Api from '../../Api';
import TransactionSearchFilterContainer from '../../container/main/TransactionSearchFilterContainer';

class TransactionList extends PureComponent {
  componentDidMount() {
    // Api.get('/transactions').then(({ data }) => this.props.setTransactionList(data));
    this.props.requestTransactionList();
  }

  render() {
    const { transactions, loading } = this.props;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          {/*<TransactionSearchFilter />*/}
          <TransactionSearchFilterContainer />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} isLoading={loading} />
        </Card>
      </div>
    );
  }
}

TransactionList.defaultProps = {
  transactions: [],
  // setTransactionList: () => {},
  requestTransactionList: () => {},
};

export default TransactionList;
