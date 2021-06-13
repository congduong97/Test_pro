import {all, fork} from 'redux-saga/effects';
import authSagas from '@store/sagas/authSagas';

export default function* rootSaga() {
  yield all([...authSagas.map(watcher => fork(watcher))]);
}
