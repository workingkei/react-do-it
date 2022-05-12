import React, { PureComponent } from 'react';
import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';
import TransactionTable from './TransactionTable';
import TransactionSearchFilterContainer from '../../container/main/TransactionSearchFilterContainer';
import TransactionPaginationContainer from '../../container/main/TransactionPaginationContainer';

class TransactionList extends PureComponent {
  componentDidMount() {
    this.props.requestTransactionList();
  }

  render() {
    const { transactions, loading } = this.props;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} isLoading={loading} />
        </Card>
        <TransactionPaginationContainer />
      </div>
    );
  }
}

TransactionList.defaultProps = {
  transactions: [],
  requestTransactionList: () => {},
};

export default TransactionList;
