import { INC, DEC } from "../actionTypes/counter";

export const incActionCreator = function(by = 5) {
  return { type: INC, by };
};

export const decActionCreator = function(by = 5) {
  return { type: DEC, by };
};
