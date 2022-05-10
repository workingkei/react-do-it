import React, { PureComponent } from 'react';
import CoinOverview from './CoinOverview';
import TransactionListContainer from '../../container/main/TransactionListContainer';
// import TransactionList from './TransactionList';

class MainPage extends PureComponent {
  render() {
    return (
      <>
        <CoinOverview />
        <TransactionListContainer />
      </>
    );
  }
}

export default MainPage;
