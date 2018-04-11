import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import SongItem from 'components/SongItem';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlayerActions } from 'store/ducks/player';

const SongList = ({ data, setSongRequest, ...props }) => (
  <FlatList
    {...props}
    data={data}
    keyExtractor={song => String(song.id)}
    renderItem={({ item }) => <SongItem song={item} onPress={() => setSongRequest(item, data)} />}
  />
);

SongList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
  setSongRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(null, mapDispatchToProps)(SongList);
