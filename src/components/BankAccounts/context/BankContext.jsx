import React, { createContext, useContext, useState } from 'react';

const BankContext = createContext(undefined);

const defaultAccountValues = {
  balance: 0,
  isLocked: false,
  isAuthenticated: false,
  pin: '0000',
};

export const BankProvider = ({ children }) => {
  const [account, setAccount] = useState(defaultAccountValues);

  const handleOnDeposit = (amount) => {
    setAccount((prev) => ({ ...prev, balance: prev.balance + +amount }));
  };

  const handleOnWithdraw = (amount) => {
    setAccount((prev) => ({ ...prev, balance: prev.balance - +amount }));
  };

  const handleOnPinUpdate = (newPin) => {
    setAccount((prev) => ({ ...prev, pin: newPin }));
  };

  const handleAuthenticationToggle = () => {
    setAccount((prev) => ({ ...prev, isAuthenticated: !prev.isAuthenticated }));
  };

  const handleLockAccount = () => {
    setAccount((prev) => ({ ...prev, isLocked: !prev.isLocked }));
  };

  return (
    <BankContext.Provider
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
    </BankContext.Provider>
  );
};

export const useBankContext = () => {
  const bankContext = useContext(BankContext);

  if (!bankContext) {
    throw new Error('useBankContext must be used within a BankProvider');
  }

  return bankContext;
};
