import { put, takeEvery, call, select } from 'redux-saga/effects';
import { ApiCall } from '../utils/Api';
import { setCalls, FETCH_CALLS } from '../store/reduserCalls';
import { setFilter } from '../store/reducerFilter';
import { setPreload } from '../store/preloaderReducer';

function* apiCardsWorker() {
  yield put(setPreload(true));
  const searchData = yield select(({searchReduser}) => searchReduser.searchData);
  const data = yield call(ApiCall.getCallList, searchData.firstDate, searchData.secondDate);
  yield put(setCalls(data.results));
  yield put(setFilter([]));
  yield put(setPreload(false));
}
  
export function* callsWatcher() {
  yield takeEvery(FETCH_CALLS, apiCardsWorker);
}

  