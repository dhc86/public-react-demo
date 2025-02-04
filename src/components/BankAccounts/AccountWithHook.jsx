import { Separator } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';

import BankAuthentication from '@/components/BankAccounts/ui/BankAuthentication';
import BankMainMenu from '@/components/BankAccounts/ui/BankMainMenu';
import BankUpdatePin from '@/components/BankAccounts/ui/BankUpdatePin';
import { Card, CardContent } from '@/components/ui';

import useBankActions from './hooks/useBankActions';

// BankAccount component
const AccountWithHook = () => {
  const {
    account,
    handleAuthenticationToggle,
    handleLockAccount,
    handleOnDeposit,
    handleOnWithdraw,
    handleOnPinUpdate,
  } = useBankActions();

  const [canViewUpdatePIN, setCanViewUpdatePIN] = useState(false);

  const handlePinVerification = () => {
    handleAuthenticationToggle();
  };

  const onPinUpdate = (newPin) => {
    handleOnPinUpdate(newPin);
    alert('✅ PIN updated successfully ✅');
    setCanViewUpdatePIN(false);
  };

  const onCanUpdatePinClick = () => {
    setCanViewUpdatePIN((prev) => !prev);
  };

  return (
    <div className='flex flex-wrap justify-center gap-4'>
      <Card className='w-[320px]'>
        <CardContent className='flex flex-col gap-2 p-4'>
          <h2 className='mb-2 text-xl font-semibold'>
            Bank Account with Hook{' '}
            {account.isLocked && account.isAuthenticated ? '🔐' : ''}
          </h2>
          <Separator />
          {canViewUpdatePIN && (
            <BankUpdatePin account={account} onPinUpdate={onPinUpdate} />
          )}
          {account.isAuthenticated && !canViewUpdatePIN && (
            <>
              <BankMainMenu
                account={account}
                onCanUpdatePinClick={onCanUpdatePinClick}
                onToggleVisibility={handleAuthenticationToggle}
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

export default AccountWithHook;
