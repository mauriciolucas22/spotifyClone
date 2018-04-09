import React from 'react';
import { View } from 'react-native';
import Routes from 'routes';
import Player from 'components/Player';

import styles from './styles';

const Index = () => (
  <View style={styles.container}>
    <Routes />
    <Player />
  </View>
);

export default Index;
