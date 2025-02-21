import { Outlet } from 'react-router-dom';

import { useAuth } from '@/components/AuthProvider';
import Navbar from '@/components/Navbar';
import DeveloperInfo from './components/DeveloperInfo';

const App = () => {
  const { token } = useAuth();

  return (
    <>
      <div className='dev-panel fixed bottom-0 left-0 top-0'>
        <DeveloperInfo />
      </div>

      <div className='view-panel ml-[600px]' style={{ minWidth: '50px' }}>
        {token && <Navbar />}
        <Outlet />
      </div>
    </>
  );
};

export default App;
