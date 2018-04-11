import Immutable from 'seamless-immutable';

export const Types = {
  SET_SONG_REQUEST: 'player/SET_SONG_REQUEST',
  SET_SONG_SUCCESS: 'player/SET_SONG_SUCCESS',
  SET_SONG_FAILURE: 'player/SET_SONG_FAILURE',
};

const initialState = Immutable({
  currentSong: {},
  loadingId: null,
  error: null,
});

export default function player(state = initialState, action) {
  switch (action.type) {
    case Types.SET_SONG_REQUEST:
      return { ...state, loadingId: action.playload.song.id };

    case Types.SET_SONG_SUCCESS:
      return { ...state, currentSong: action.playload.song, loadingId: null };

    case Types.SET_SONG_FAILURE:
      return { ...state, error: action.playload.error, loadingId: null };
    default:
      return state;
  }
}

export const Creators = {
  setSongRequest: song => ({
    type: Types.SET_SONG_REQUEST,
    playload: { song },
  }),

  setSongSuccess: song => ({
    type: Types.SET_SONG_SUCCESS,
    playload: { song },
  }),

  setSongFailure: error => ({
    type: Types.SET_SONG_FAILURE,
    playload: { error },
  }),
};
