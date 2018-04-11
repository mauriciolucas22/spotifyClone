import Immutable from 'seamless-immutable';

export const Types = {
  SET_SONG_REQUEST: 'player/SET_SONG_REQUEST',
  SET_SONG_SUCCESS: 'player/SET_SONG_SUCCESS',
  SET_SONG_FAILURE: 'player/SET_SONG_FAILURE',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  NEXT: 'player/NEXT',
  PREVIOUS: 'player/PREVIOUS',
};

const initialState = Immutable({
  list: [],
  currentSong: {},
  loadingId: null,
  error: null,
  paused: false,
});

export default function player(state = initialState, action) {
  switch (action.type) {
    case Types.SET_SONG_REQUEST:
      return { ...state, loadingId: action.playload.song.id };

    case Types.SET_SONG_SUCCESS:
      return { ...state, list: action.playload.list, currentSong: action.playload.song, loadingId: null, paused: false };

    case Types.SET_SONG_FAILURE:
      return { ...state, error: action.playload.error, loadingId: null };

    case Types.PLAY:
      return { ...state, paused: false };

    case Types.PAUSE:
      return { ...state, paused: true };

    default:
      return state;
  }
}

export const Creators = {
  setSongRequest: (song, list) => ({
    type: Types.SET_SONG_REQUEST,
    playload: { song, list },
  }),

  setSongSuccess: (song, list) => ({
    type: Types.SET_SONG_SUCCESS,
    playload: { song, list },
  }),

  setSongFailure: error => ({
    type: Types.SET_SONG_FAILURE,
    playload: { error },
  }),

  play: () => ({
    type: Types.PLAY,
  }),

  pause: () => ({
    type: Types.PAUSE,
  }),

  next: () => ({
    type: Types.NEXT,
  }),

  previous: () => ({
    type: Types.PREVIOUS,
  }),
};
