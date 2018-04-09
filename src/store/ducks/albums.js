export const Types = {
  GET_REQUEST: 'albums/GET_REQUEST',
  GET_SUCCESS: 'albums/GET_SUCCESS',
  GET_FAILURE: 'albums/GET_FAILURE',
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function albums(state = initialState, action) {
  switch (action.Types) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { data: state.playload.data, loading: false, error: null };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.playload.error };
    default:
      return state;
  }
}


export const Creators = {
  getAlbumsRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getAlbumsSuccess: data => ({
    type: Types.GET_SUCCESS,
    playload: { data },
  }),

  getAlbumsFailure: error => ({
    type: Types.GET_FAILURE,
    playload: { error },
  }),
};