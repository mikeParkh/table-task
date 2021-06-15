import { Provider } from 'react-redux';
import App from './App';
import Router from './router';
import store from './redux/store';

const Root = () => (
  <Provider store={store}>
    <App>
      <Router />
    </App>
  </Provider>
)

export default Root;
