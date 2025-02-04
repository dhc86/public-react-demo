import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Route from '@/components/Route';
import App from '@/App';
import HomePage from '@/pages/HomePage';
import ListingDetailsPage from '@/pages/ListingDetailsPage';
import NotFoundPage from '@/pages/NotFoundPage';
import StatesPracticePage from '@/pages/StatesPracticePage';
import ListingFavoritesPage from './pages/ListingFavoritesPage';
import SignInPage from './pages/SignInPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/signin',
        element: <Route><SignInPage /></Route>,
      },
      {
        index: true,
        element: <Route isProtected><HomePage /></Route>,
      },
      {
        path: '/state-practice',
        element: <Route isProtected><StatesPracticePage /></Route>,
      },
      {
        path: '/listings/:listingId',
        element: <Route isProtected><ListingDetailsPage /></Route>,
      },
      {
        path: '/favorites',
        element: <Route isProtected><ListingFavoritesPage /></Route>,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
