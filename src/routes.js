import { StackNavigator } from 'react-navigation';

import Main from 'pages/main';
import Album from 'pages/album';
import Search from 'pages/search';

const Routes = StackNavigator({
  Main: { screen: Main },
  Search: { screen: Search },
  Album: { screen: Album },
});

export default Routes;
