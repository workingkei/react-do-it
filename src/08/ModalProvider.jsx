import createProvider from '../doit-ui/Modal/create';
import { TRADE_COIN_MODAL, REGISTER_USER_MODAL } from './constants/modals';
// import TradeCoinPage from './components/main/TradeCoinPage01';
import TradeCoinPage from './container/main/TradeCoinPageContainer';
import RegisterPage from './container/signup/RegisterPageContainer';

export default createProvider({
  [TRADE_COIN_MODAL]: TradeCoinPage,
  [REGISTER_USER_MODAL]: RegisterPage,
});
