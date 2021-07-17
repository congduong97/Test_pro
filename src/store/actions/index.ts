import { propsAction, propsStatusTypes } from './actionTypes';
export const generalType = ({ type, status }: propsStatusTypes) =>
  `${type}_${status}`;

export const generalAction = ({ type, payload, status }: propsAction) => ({
  type: generalType({ type: type, status: status }),
  payload: payload,
});
