import { combineReducers } from 'redux';
import { fakeApi } from '@services'

import unAuthorize from './unAuthorizeSlices';
import globalApp from './global';
export default combineReducers({
  unAuthorize,
  globalApp,
  [fakeApi.reducerPath]: fakeApi.reducer
});
