import Immutable from 'seamless-immutable';

export const Types = {
  REQUEST: 'search/GET_REQUEST',
  SUCCESS: 'search/GET_SUCCESS',
  FAILURE: 'search/GET_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: null,
});

export default function search(state = initialState, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };

    case Types.SUCCESS:
      return { data: action.playload.data, loading: false, error: null };

    case Types.FAILURE:
      return { ...state, loading: false, error: action.playload.error };

    default:
      return state;
  }
}


export const Creators = {
  searchRequest: term => ({
    type: Types.REQUEST,
    playload: { term },
  }),

  searchSuccess: data => ({
    type: Types.SUCCESS,
    playload: { data },
  }),

  searchFailure: error => ({
    type: Types.FAILURE,
    playload: { error },
  }),
};
