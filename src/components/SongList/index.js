import React from 'react';
import { FlatList } from 'react-native';

import SongItem from 'components/SongItem';

const SongList = ({ data, ...props }) => (
  <FlatList
    {...props}
    data={data}
    keyExtractor={song => String(song.id)}
    renderItem={({ item }) => <SongItem song={item} />}
  />
);

export default SongList;
