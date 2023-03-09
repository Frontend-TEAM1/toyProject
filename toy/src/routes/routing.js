import Layout from 'components/Layout';
import HomePage from 'pages/Home';
import TodoPage from 'pages/Todo';
import { createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/todo/post/:id',
        element: <TodoPage />,
      },
    ],
  },
]);

export default router;
