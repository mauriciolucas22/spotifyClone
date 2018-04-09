import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const SongItem = ({ song }) => (
  <View style={styles.container}>
    <View style={styles.songInfo}>
      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.author}>{song.author}</Text>
    </View>

    <TouchableOpacity onPress={() => {}}>
      <Icon name="play-circle-filled" size={20} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

export default SongItem;
