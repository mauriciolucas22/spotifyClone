import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as PlayerActions } from 'store/ducks/player';

import styles from './styles';

class SongItem extends Component {
  static propTypes = {
    song: PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
    }).isRequired,
  };

  render() {
    const { song } = this.props;
    return (
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
  }
}

const mapStateToProps = state => ({
  player: state.player,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SongItem);
