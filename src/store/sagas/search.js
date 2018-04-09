import api from 'services/api';
import { call, put } from 'redux-saga';

import { Creators as SearchActions } from 'store/ducks/search';

export function* search(action) {
  try {
    const response = call(api.get(), `/songs?q=${action.playload.term}`);

    yield put(SearchActions.searchSuccess(response.data));
  } catch (err) {
    yield put(SearchActions.searchFailure('Música não encontrada!'));
  }
}
