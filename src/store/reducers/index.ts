import { combineReducers } from 'redux';

import unAuthorize from './unAuthorizeSlices';
import globalApp from './global';
export default combineReducers({
  unAuthorize,
  globalApp
});
