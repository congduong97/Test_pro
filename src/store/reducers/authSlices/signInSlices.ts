import {createSlice} from '@reduxjs/toolkit';
import {initDefaultState, nameSlices} from '@constants/stateStore';

const signInSlice = createSlice({
  name: nameSlices.signInSlice,
  initialState: initDefaultState,
  reducers: {
    requestSignIn: state => {
      state.fetching = true;
    },
    requestSignInSuccess: (state, {payload}) => {
      state.data = payload;
      state.fetching = false;
      state.errors = null;
    },
    requestSignInFailure: (state, {payload}) => {
      state.data = null;
      state.fetching = false;
      state.errors = payload;
    },
  },
});

export const {requestSignIn, requestSignInFailure, requestSignInSuccess} =
  signInSlice.actions;
export default signInSlice.reducer;
