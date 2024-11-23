import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Game } from './Game';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/game',
    element: <Game />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
