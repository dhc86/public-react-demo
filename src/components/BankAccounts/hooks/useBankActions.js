import { useState } from 'react';

const defaultAccountValues = {
  balance: 0,
  isLocked: false,
  isAuthenticated: false,
  pin: '0000',
};
// Custom hook to manage bank account actions
const useBankActions = () => {
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

  return {
    account,
    handleAuthenticationToggle,
    handleLockAccount,
    handleOnDeposit,
    handleOnWithdraw,
    handleOnPinUpdate,
  };
};

export default useBankActions;
