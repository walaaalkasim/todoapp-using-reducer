import { actions } from "../actions/actions";

export const addToTodo = (array, action) => {
  switch (action.type) {
    case actions.ADD_TO_TODO:
      return [...array, action.payload];
    case actions.DELETE:
      return (array = []);

    default:
      return array;
  }
};
