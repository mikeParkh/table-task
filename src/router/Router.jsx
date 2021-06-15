import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { getPageComponent } from '../helpers';
import routes from '../constants/routes';

const Router = () => (
  <BrowserRouter>
    <Switch>
      {
        Object.values(routes).map(({ path, componentName, ...restParams }) => (
          <Route
            component={getPageComponent(componentName)}
            key={componentName}
            path={path}
            {...restParams}
          />
        ))
      }
    </Switch>
  </BrowserRouter>
);

export default Router;
