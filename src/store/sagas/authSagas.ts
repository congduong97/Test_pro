import {ActionName, StatusTypes} from '@store/actions/actionTypes';
import {generalType} from '@store/actions';
import {all, takeLatest} from 'redux-saga/effects';
function* handleSignIn() {}

export default [
  function* fetchWatcherAuth() {
    yield all([
      takeLatest(
        generalType({type: ActionName.SIGN_IN, status: StatusTypes.REQUEST}),
        handleSignIn,
      ),
    ]);
  },
];
