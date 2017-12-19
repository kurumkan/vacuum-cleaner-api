import Main from 'components/Main';
import Dashboard from 'components/Dashboard';
import NotFound from 'components/NotFound';

const createRoutes = (store) => {
  const routes = [
    {
      path: '/',
      component: Main,
      indexRoute: {
        onEnter: (nextState, replace) => replace({
          pathname: 'dashboard'
        })
      },
      childRoutes: [
        {
          path: 'dashboard',
          component: Dashboard,
        },
        {
          path: '*',
          component: NotFound
        }
      ]
    }
  ];

  return routes;
};

export default createRoutes;