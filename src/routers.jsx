import { createBrowserRouter } from 'react-router-dom';

import Home from './Home';
import Child from './Child';

const ROUTES = [
  {
    path: '/',
    element: <Home />,
    // children: [
    //   {
    //     path: '/child',
    //     element: <Child />,
    //   },
    // ],
  },
  {
    path: '/child',
    element: <Child />,
  },
];

const router = createBrowserRouter(ROUTES, {
  basename:
    process.env.NODE_ENV === 'production'
      ? '/vite-github-deploy-project/'
      : '/',
});

export default router;
