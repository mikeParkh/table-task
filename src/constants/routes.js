const routes = {
  main: {
    path: '/:userID?',
    componentName: 'Main',
    exact: true,
  },
  greeting: {
    path: '/greeting/:userID?',
    componentName: 'Greeting',
    exact: true,
  }
};

export default routes;
