import { createContext, useContext, useReducer } from 'react';

const BankContextWithReducer = createContext(undefined);

const defaultAccountValues = {
  balance: 0,
  isLocked: false,
  isAuthenticated: false,
  pin: '0000',
};

const BankActionsContextReducer = (prevState, action) => {
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

export const BankProviderWithReducer = ({ children }) => {
  const [account, dispatchBankAction] = useReducer(
    BankActionsContextReducer,
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

  return (
    <BankContextWithReducer.Provider
      value={{
        account,
        handleOnDeposit,
        handleOnWithdraw,
        handleOnPinUpdate,
        handleAuthenticationToggle,
        handleLockAccount,
      }}
    >
      {children}
    </BankContextWithReducer.Provider>
  );
};

export const useBankContextWithReducer = () => {
  const bankContextWithReducer = useContext(BankContextWithReducer);

  if (!bankContextWithReducer) {
    throw new Error(
      'useBankContextWithReducer must be used within a bankProviderWithReducer',
    );
  }

  return bankContextWithReducer;
};
