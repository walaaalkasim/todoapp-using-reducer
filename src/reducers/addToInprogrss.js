import { actions } from "../actions/actions";

export const addToInprogress = (array1, action) => {
  switch (action.type) {
    case actions.DELETE:
      return (array1 = []);
    case actions.ADD_TO_INPROGRESS:
      return [...array1, action.payload];
    default:
      return array1;
  }
};
