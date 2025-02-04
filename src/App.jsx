import { Outlet } from 'react-router-dom';

import { useAuth } from '@/components/AuthProvider';
import Navbar from '@/components/Navbar';
import DeveloperInfo from './components/DeveloperInfo';

const App = () => {
  const { token } = useAuth();

  return (
    <>
      <div className='fixed bottom-0 left-0 top-0'>
        {/* <Devbar /> */}
        <DeveloperInfo />
      </div>

      <div className='ml-[600px]'>
        {token && <Navbar />}
        <Outlet />
      </div>
    </>
  );
};

export default App;

