import React, { useState } from 'react';

import { Button, Input } from '@/components/ui';

const BankAuthentication = ({ account, onAccountAuth }) => {
  const [pinValue, setPinValue] = useState('');

  const handlePinVerification = () => {
    if (pinValue === account.pin) {
      setPinValue('');
      onAccountAuth();
    } else {
      alert('❌ Invalid PIN ❌');
    }
  };
  return (
    <>
      <Input
        placeholder='Enter PIN'
        value={pinValue}
        onChange={(e) => setPinValue(e.target.value)}
      />
      <Button onClick={handlePinVerification}>Enter</Button>
    </>
  );
};

export default BankAuthentication;
