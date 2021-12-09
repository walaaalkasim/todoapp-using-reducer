import { actions } from "../actions/actions";

export const inputGrab = (input, action) => {
  switch (action.type) {
    case actions.GRAB:
      return (input = action.payload);
    case actions.RESET:
      return (input = "");
    default:
      return input;
  }
};
