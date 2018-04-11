import { call, put, select } from 'redux-saga/effects';
import RNSound from 'react-native-sound/sound';

import { Creators as PlayerActions } from 'store/ducks/player';

const Sound = new RNSound();

export function* play() {
  try {
    yield call(Sound.play);
  } catch (err) {
    console.tron.log(err);
  }
}

export function* pause() {
  try {
    yield call(Sound.pause);
  } catch (err) {
    console.tron.log(err);
  }
}

export function* setSong(action) {
  try {
    if (Sound.isLoaded()) yield call(Sound.release);

    yield call(Sound.init, action.playload.song.file);
    yield call(play);

    yield put(PlayerActions.setSongSuccess(action.playload.song, action.playload.list));
  } catch (err) {
    yield put(PlayerActions.setSongFailure('Erro ao iniciar musica'));
  }
}

export function* next() {
  try {
    // pega o state do player
    const player = yield select(state => state.player);

    // qual musica está tocando
    const currentIndex = player.list.findIndex(song => song.id === player.currentSong.id);

    // verifica se existe mais musicas
    const nextSong = player.list[currentIndex + 1];

    if (nextSong) {
      yield put(PlayerActions.setSongRequest(nextSong, player.list));
    }
  } catch (err) {
    console.tron.log(err);
  }
}

export function* previous() {
  try {
    // pega o state do player
    const player = yield select(state => state.player);

    // qual musica está tocando
    const currentIndex = player.list.findIndex(song => song.id === player.currentSong.id);

    // verifica se existe mais musicas
    const nextSong = player.list[currentIndex - 1];

    if (nextSong) {
      yield put(PlayerActions.setSongRequest(nextSong, player.list));
    }
  } catch (err) {
    console.tron.log(err);
  }
}
