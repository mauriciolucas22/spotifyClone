import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as PlayerActions } from 'store/ducks/player';

import styles from './styles';

const SongItem = ({ song, player, setSongRequest }) => (
  <TouchableOpacity style={styles.container} onPress={() => { setSongRequest(song); }}>
    <View style={styles.songInfo}>
      <Text style={[
        styles.title,
        (player.currentSong.id === song.id) ? styles.active : {},
      ]}
      >{song.title}</Text>
      <Text style={styles.author}>{song.author}</Text>
    </View>

    { (player.loadingId === song.id)
      ? <ActivityIndicator size="small" color="#999" style={styles.loading} />
      : <Icon name="play-circle-filled" size={20} style={styles.icon} /> }
  </TouchableOpacity>
);

SongItem.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  setSongRequest: PropTypes.func.isRequired,
  player: PropTypes.shape({
    loadingId: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SongItem);
