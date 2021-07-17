export enum StatusTypes {
  REQUEST = 'REQUEST',
  FETCHING = 'FETCHING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  PENDING = 'PENDING',
}

export interface propsStatusTypes {
  type: string;
  status: StatusTypes;
}

export interface propsAction {
  type: string;
  payload: any;
  status: propsStatusTypes;
}

export enum ActionName {
  SIGN_IN = '@SIGN_IN',
}
