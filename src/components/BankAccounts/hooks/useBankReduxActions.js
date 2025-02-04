import { useDispatch, useSelector } from 'react-redux';

import { deposit, pinUpdate, toggleAuthentication, toggleLocker, withdrawal } from '@/state/slices/bankSlice';


// Custom hook to manage bank account actions using Redux
const useBankReduxActions = () => {
  const account = useSelector((state)=> state.bank);
  const dispatch = useDispatch();

  const handleOnDeposit = (amount) => {
    dispatch(deposit(amount));
  };

  const handleOnWithdraw = (amount) => {
    dispatch(withdrawal(amount));
  };

  const handleOnPinUpdate = (newPin) => {
    dispatch(pinUpdate(newPin));
  };

  const handleAuthenticationToggle = () => {
    dispatch(toggleAuthentication());
  };

  const handleLockAccount = () => {
    dispatch(toggleLocker());
  };

  return {
    account,
    handleAuthenticationToggle,
    handleLockAccount,
    handleOnDeposit,
    handleOnWithdraw,
    handleOnPinUpdate,
  };
};

export default useBankReduxActions;
