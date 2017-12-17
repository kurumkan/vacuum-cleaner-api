import Main from 'components/Main';
import ImageGridContainer from 'containers/ImageGridContainer';
import Profile from 'components/Profile/index';
import NotFound from 'components/NotFound/index';

const createRoutes = (store) => {
  const routes = [
    {
      path: '/',
      component: Main,
      indexRoute: {
        onEnter: (nextState, replace) => replace({
          pathname: 'pins'
        })
      },
      childRoutes: [
        {
          path: 'pins',
          component: ImageGridContainer,
        },
        {
          path: 'profile',
          component: Profile
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