import React, { useState } from 'react';

import { Button, Input } from '@/components/ui';

const BankUpdatePin = ({ account, onPinUpdate }) => {
  const [newPin, setNewPin] = useState('');
  const [currentPin, setCurrentPin] = useState('');

  const handleUpdatePin = () => {
    if (account.pin === currentPin) {
      setNewPin('');
      setCurrentPin('');
      onPinUpdate(newPin);
    } else {
      console.log(account.pin);
      alert('❌ Invalid PIN ❌');
    }
  };

  return (
    <>
      <Input
        placeholder='Enter current PIN'
        type='number'
        value={currentPin}
        onChange={(e) => setCurrentPin(e.target.value)}
      />
      <Input
        placeholder='Enter new PIN'
        type='number'
        value={newPin}
        onChange={(e) => setNewPin(e.target.value)}
      />
      <div className='flex flex-row items-center justify-center gap-2'>
        <Button onClick={handleUpdatePin} disabled={account.isLocked}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default BankUpdatePin;
