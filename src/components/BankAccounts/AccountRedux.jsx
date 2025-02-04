import { Separator } from '@radix-ui/react-dropdown-menu';
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BankAuthentication from '@/components/BankAccounts/ui/BankAuthentication';
import BankMainMenu from '@/components/BankAccounts/ui/BankMainMenu';
import BankUpdatePin from '@/components/BankAccounts/ui/BankUpdatePin';
import { Card, CardContent } from '@/components/ui';
import { deposit, depositAsync, pinUpdate, toggleAuthentication, toggleLocker, withdrawal } from '@/state/slices/bankSlice';

// BankAccount component with Redux
const AccountRedux = () => {
  const [canViewUpdatePIN, setCanViewUpdatePIN] = useState(false);
  const account = useSelector((state) => state.bank);
  const dispatch = useDispatch();

  const handleToggleVisibility = () => {
    dispatch(toggleAuthentication());
  };

  const handleLockAccount = () => {
    dispatch(toggleLocker());
  };

  const handlePinVerification = () => {
    dispatch(toggleAuthentication());
  };

  const handleOnPinUpdate = (newPin) => {
    dispatch(pinUpdate(newPin));
    alert('✅ PIN updated successfully ✅');
    setCanViewUpdatePIN(false);
  };

  const onCanUpdatePinClick = () => {
    setCanViewUpdatePIN((prev) => !prev);
  };

  const handleOnDeposit = (amount) => {
    dispatch(depositAsync(amount));
    // dispatch(deposit(amount));
  };

  const handleOnWithdraw = (amount) => {
    dispatch(withdrawal(amount));
  };

  return (
    <div className='flex flex-wrap justify-center gap-4'>
      <Card className='w-[320px]'>
        <CardContent className='flex flex-col gap-2 p-4'>
          <h2 className='mb-2 text-xl font-semibold'>
            Bank Account Redux
            {account.isLocked && account.isAuthenticated ? '🔐' : ''}
          </h2>
          <Separator />
          {canViewUpdatePIN && (
            <BankUpdatePin account={account} onPinUpdate={handleOnPinUpdate} />
          )}
          {account.isAuthenticated && !canViewUpdatePIN && (
            <>
              <BankMainMenu
                account={account}
                onCanUpdatePinClick={onCanUpdatePinClick}
                onToggleVisibility={handleToggleVisibility}
                onLockAccount={handleLockAccount}
                onDeposit={handleOnDeposit}
                onWithdraw={handleOnWithdraw}
              />
            </>
          )}
          {!account.isAuthenticated && !canViewUpdatePIN && (
            <>
              <BankAuthentication
                account={account}
                onAccountAuth={handlePinVerification}
              />
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default memo(AccountRedux);
