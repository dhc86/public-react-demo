import { Separator } from '@radix-ui/react-dropdown-menu';
import { memo, useState } from 'react';

import BankAuthentication from '@/components/BankAccounts/ui/BankAuthentication';
import BankMainMenu from '@/components/BankAccounts/ui/BankMainMenu';
import BankUpdatePin from '@/components/BankAccounts/ui/BankUpdatePin';
import { Card, CardContent } from '@/components/ui';

const defaultAccountValues = {
  balance: 0,
  isLocked: false,
  isAuthenticated: false,
  pin: '0000',
};

const SimpleAccount = () => {
  const [account, setAccount] = useState(defaultAccountValues);
  const [canViewUpdatePIN, setCanViewUpdatePIN] = useState(false);

  const handleToggleVisibility = () => {
    setAccount((prev) => ({ ...prev, isAuthenticated: !prev.isAuthenticated }));
  };

  const handleLockAccount = () => {
    setAccount((prev) => ({ ...prev, isLocked: !prev.isLocked }));
  };

  const handlePinVerification = () => {
    setAccount((prev) => ({
      ...prev,
      isAuthenticated: !prev.isAuthenticated,
    }));
  };

  const handleOnPinUpdate = (newPin) => {
    setAccount((prev) => ({ ...prev, pin: newPin }));
    alert('✅ PIN updated successfully ✅');
    setCanViewUpdatePIN(false);
  };

  const onCanUpdatePinClick = () => {
    setCanViewUpdatePIN((prev) => !prev);
  };

  const handleOnDeposit = (amount) => {
    setAccount((prev) => ({ ...prev, balance: prev.balance + +amount }));
  };

  const handleOnWithdraw = (amount) => {
    setAccount((prev) => ({ ...prev, balance: prev.balance - +amount }));
  };

  return (
    <div className='flex flex-wrap justify-center gap-4'>
      <Card className='w-[320px]'>
        <CardContent className='flex flex-col gap-2 p-4'>
          <h2 className='mb-2 text-xl font-semibold'>
            Bank Account{' '}
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

export default memo(SimpleAccount);
