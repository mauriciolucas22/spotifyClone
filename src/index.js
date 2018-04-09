import React from 'react';
import { Provider } from 'react-redux';

import 'config/ReactotronConfig';
import store from 'store';
import Index from 'pages/index';
// import Routes from 'routes';
// import Player from 'components/Player';

const App = () => (
  <Provider store={store}>
    <Index />
  </Provider>
);

export default App;
