import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Album = () => (
  <View style={styles.container}>

  </View>
);

Album.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.album.title,
});

export default Album;
