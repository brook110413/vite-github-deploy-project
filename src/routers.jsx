import { createBrowserRouter } from 'react-router-dom';

import Home from './Home';

const ROUTES = [
  {
    path: '/',
    element: <Home />,
    // errorElement: <NotFoundPage />,
  },
  // {
  //   path: '/heroes',
  //   element: <HeroListPage />,
  //   loader: heroesListLoader,
  //   errorElement: <NotFoundPage />,
  //   children: [
  //     {
  //       path: ':heroId',
  //       element: <HeroProfilePage />,
  //       loader: heroProfileLoader,
  //     },
  //   ],
  // },
];

const router = createBrowserRouter(ROUTES);

export default router;
