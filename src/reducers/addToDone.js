import { actions } from "../actions/actions";

export const addToDone = (array2, action) => {
  switch (action.type) {
    case actions.ADD_TO_DONE:
      return [...array2, action.payload];
    case actions.DELETE:
      return (array2 = []);

    default:
      return array2;
  }
};
