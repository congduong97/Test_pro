export interface initDefaultStateType {
  data: object;
  fetching: boolean;
  errors: object;
}

export const initDefaultState: initDefaultStateType = {
  data: null,
  fetching: false,
  errors: null,
};

export enum nameSlices {
  signInSlice = 'signInSlice',
  signUpSlice = 'signUpSlice',
}
