import { Home, Laptop, LogOut, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

import api from '@/api';
import { useAuth } from '@/components/AuthProvider';
import { useTheme } from '@/components/ThemeProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Separator,
} from '@/components/ui';

const Navbar = () => {
  const { setToken } = useAuth();
  const { setTheme } = useTheme();

  const handleSignOut = async () => {
    try {
      await api.post('/api/signout');
      setToken(null);
    } catch (error) {
      setToken(null);
    }
  };

  return (
    <>
      <div className='flex flex-row items-center justify-between gap-8 px-8 py-4'>
        <Link to='/'>
          <Home />
        </Link>
        <div className='flex-end flex flex-row items-center gap-8'>
          <Link to='/state-practice'>State Managment Demo</Link>
          <Link to='/'>Listings</Link>
          <Link to='/favorites'>Favorites</Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link>Account</Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Sun className='mr-2 h-4 w-4' />
                  <span>Theme</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem onClick={() => setTheme('light')}>
                      <Sun className='mr-2 h-4 w-4' />
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')}>
                      <Moon className='mr-2 h-4 w-4' />
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('system')}>
                      <Laptop className='mr-2 h-4 w-4' />
                      System
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem onClick={handleSignOut}>
                <LogOut className='mr-2 h-4 w-4' />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Navbar;
