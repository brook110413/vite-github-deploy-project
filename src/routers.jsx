import { createBrowserRouter } from 'react-router-dom';

import Home from './Home';

const ROUTES = [
  {
    path: '/',
    element: <Home />,
  },
];

const router = createBrowserRouter(ROUTES, {
  basename:
    process.env.NODE_ENV === 'production'
      ? '/vite-github-deploy-project/'
      : '/',
});

export default router;
