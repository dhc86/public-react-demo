import AccountRedux from '@/components/BankAccounts/AccountRedux';
import AccountWithContext from '@/components/BankAccounts/AccountWithContext';
import AccountWithContextReducer from '@/components/BankAccounts/AccountWithContextReducer';
import AccountWithHook from '@/components/BankAccounts/AccountWithHook';
import AccountWithHookWithReducer from '@/components/BankAccounts/AccountWithHookWithReducer';
import AccountWithHookWithRedux from '@/components/BankAccounts/AccountWithHookWithRedux';
import { BankProvider } from '@/components/BankAccounts/context/BankContext';
import { BankProviderWithReducer } from '@/components/BankAccounts/context/BankContextWithReducer';
import SimpleAccount from '@/components/BankAccounts/SimpleAccount';
import { Separator } from '@/components/ui';

const StatesPracticePage = () => {
  return (
    <div className='container w-[800px] py-4'>
      <h1 className='flex justify-center'>State Practice</h1>
      <p className='flex justify-center'>Use PIN: 0000</p>
      <Separator />
      <br />
      <div className='flex flex-wrap justify-center gap-8'>
        <SimpleAccount />
        <br />
        <AccountWithHook />
        <br />
        <AccountWithHookWithReducer />
        <br />
        <BankProvider>
          <AccountWithContext />
        </BankProvider>
        <br />
        <BankProviderWithReducer>
          <AccountWithContextReducer />
        </BankProviderWithReducer>
        <br />
        <AccountRedux />
        <br />
        <AccountWithHookWithRedux />
      </div>
    </div>
  );
};

export default StatesPracticePage;
