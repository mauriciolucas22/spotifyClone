import React, { Component } from 'react';
import { View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import SongItem from 'components/SongItem';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SearchActions } from 'store/ducks/search';

import { debounce } from 'lodash'; // execua uma acao depois da chamada de uma funcao

import styles from './styles';

class Search extends Component {
  static navigationOptions = {
    title: 'Buscar',
  };

  static propTypes = {
    searchRequest: PropTypes.func.isRequired,
    search: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
      loading: PropTypes.bool,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.searchRequest = debounce(this.props.searchRequest, 500);
  }

  state = {
    searchInput: '',
  };

  search = (searchInput) => {
    this.setState({ searchInput });
    this.searchRequest(searchInput);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.searchInput}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Buscar por músicas"
            placeholderTextColor="#666"
            underlineColorAndroid="transparent"
            value={this.state.searchInput}
            onChangeText={searchInput => this.search(searchInput)}
          />
        </View>

        { this.props.search.loading
          && <ActivityIndicator size="small" color="#999" style={styles.loading} />}

        <FlatList
          data={this.props.search.data}
          keyExtractor={song => String(song.id)}
          renderItem={({ item }) => <SongItem song={item} />}
        />
      </View>
    );
  }
}

const mapStateTpProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => bindActionCreators(SearchActions, dispatch);

export default connect(mapStateTpProps, mapDispatchToProps)(Search);
