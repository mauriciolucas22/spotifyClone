import Immutable from 'seamless-immutable';

export const Types = {
  SET_SONG_REQUEST: 'player/SET_SONG_REQUEST',
  SET_SONG_SUCCESS: 'player/SET_SONG_SUCCESS',
  SET_SONG_FAILURE: 'player/SET_SONG_FAILURE',
};

const initialState = Immutable({
  currentDOng: null,
});

export default function player(state = initialState, action) {
  switch (action.type) {
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
