import {combineReducers} from 'redux';

import signInSlices from '@store/reducers/authSlices/signInSlices';

export default combineReducers({
  signInSlices,
});
