import React, { Component } from 'react';
import { View, StatusBar, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; // transforma as actions em props desse compoenente
import { Creators as AlbumsCreators } from 'store/ducks/albums';

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import styles from './styles';

import AlbumItem from './components/AlbumItem';

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sua Bibliteca',
    headerRight: (
      <TouchableOpacity style={styles.headerRight} onPress={() => { navigation.navigate('Search'); }}>
        <Icon name="search" size={24} color="#FFF" />
      </TouchableOpacity>
    ),
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    getAlbumsRequest: PropTypes.func.isRequired,
    albums: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.props.getAlbumsRequest();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        { this.props.albums.loading
          ? <ActivityIndicator size="small" color="#999" style={styles.loading} />
          : (
            <FlatList
              data={this.props.albums.data}
              keyExtractor={album => String(album.id)}
              renderItem={({ item }) => (
                // ao clicar neste item ele redireciona pra pg algum repassando o item de cada album
                <AlbumItem onPress={() => this.props.navigation.navigate('Album', { album: item })} album={item} />)}
            />
          )}
      </View>
    );
  }
}

/**
 * mapStateToProps: converte as propriedade do reducer em props de componente
 * mapDispatchToProps: possibilita traablhar com as actions do redux aqui
 */

const mapStateToProps = state => ({
  albums: state.albums,
});

const mapDispatchToProps = dispatch => bindActionCreators(AlbumsCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
