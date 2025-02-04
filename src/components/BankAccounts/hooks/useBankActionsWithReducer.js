import { useReducer } from 'react';

const defaultAccountValues = {
  balance: 0,
  isLocked: false,
  isAuthenticated: false,
  pin: '0000',
};
// Reducer to handle bank account actions
const BankActionsReducer = (prevState, action) => {
  if (action.type === 'deposit' && action.payload) {
    return { ...prevState, balance: prevState.balance + +action.payload };
  }

  if (action.type === 'withdrawal' && action.payload) {
    return { ...prevState, balance: prevState.balance - +action.payload };
  }

  if (action.type === 'pin_update' && action.payload) {
    return { ...prevState, pin: action.payload };
  }

  if (action.type === 'toggle_authentication') {
    return { ...prevState, isAuthenticated: !prevState.isAuthenticated };
  }

  if (action.type === 'toggle_locker') {
    return { ...prevState, isLocked: !prevState.isLocked };
  }

  return prevState;
};

// Custom hook with useReducer to manage bank account actions
const useBankActionsWithReducer = () => {
  const [account, dispatchBankAction] = useReducer(
    BankActionsReducer,
    defaultAccountValues,
  );

  const handleOnDeposit = (amount) => {
    dispatchBankAction({ type: 'deposit', payload: amount });
  };

  const handleOnWithdraw = (amount) => {
    dispatchBankAction({ type: 'withdrawal', payload: amount });
  };

  const handleOnPinUpdate = (newPin) => {
    dispatchBankAction({ type: 'pin_update', payload: newPin });
  };

  const handleAuthenticationToggle = () => {
    dispatchBankAction({ type: 'toggle_authentication' });
  };

  const handleLockAccount = () => {
    dispatchBankAction({ type: 'toggle_locker' });
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

export default useBankActionsWithReducer;
