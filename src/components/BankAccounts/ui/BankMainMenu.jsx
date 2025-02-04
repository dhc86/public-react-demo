import { DollarSign } from 'lucide-react';
import React, { useState } from 'react';

import { Button, Input, Separator } from '@/components/ui';

const BankMainMenu = ({
  account,
  onDeposit,
  onWithdraw,
  onCanUpdatePinClick,
  onToggleVisibility,
  onLockAccount,
}) => {
  const [amount, setAmount] = useState('');

  const handleDeposit = () => {
    if (amount) {
      setAmount('');
      onDeposit(amount);
    }
    return;
  };

  const handleWithdraw = () => {
    if (amount > account.balance) {
      alert("You don't have enough balance to withdraw.");
      return;
    }
    if (amount) {
      setAmount('');
      onWithdraw(amount);
    }
    return;
  };

  return (
    <>
      <div className='flex items-center gap-2'>
        <DollarSign className='h-4 w-4 text-primary' />
        <span className='text-muted-foreground'>
          <span className='font-bold text-foreground'>Balance: </span>
          {account.balance}
        </span>
      </div>
      <Separator />
      <Input
        placeholder='Enter amount to withdraw or deposit'
        type='number'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className='flex flex-row items-center justify-center gap-2'>
        <Button onClick={handleWithdraw} disabled={account.isLocked}>
          Withdraw
        </Button>
        <Button onClick={handleDeposit} disabled={account.isLocked}>
          Deposit
        </Button>
        <Button onClick={onCanUpdatePinClick} disabled={account.isLocked}>
          Edit PIN
        </Button>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <Button onClick={onToggleVisibility}>Log out</Button>
        <Button onClick={onLockAccount}>
          {account.isLocked ? 'Unlock Account' : 'Lock Account'}
        </Button>
      </div>
    </>
  );
};

export default BankMainMenu;
