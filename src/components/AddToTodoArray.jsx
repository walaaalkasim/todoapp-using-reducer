import { useReducer } from "react";
import { actions } from "../actions/actions";
import { addToTodo } from "../reducers/addToTodo";
import { inputGrab } from "../reducers/inputGrab";
import { addToInprogress } from "../reducers/addToInprogrss";
import { addToDone } from "../reducers/addToDone";

const AddToTodoArray = () => {
  const [input, dispatchInput] = useReducer(inputGrab, "");
  const [array, dispatchArray] = useReducer(addToTodo, []);
  const [array1, dispatchArray1] = useReducer(addToInprogress, []);
  const [array2, dispatchArray2] = useReducer(addToDone, []);

  const addTotodo = (e) => {
    e.preventDefault();
    dispatchArray({ type: actions.ADD_TO_TODO, payload: input });
    dispatchInput({ type: actions.RESET });
  };

  const addToinprogress = (e) => {
    e.preventDefault();
    dispatchArray1({ type: actions.ADD_TO_INPROGRESS, payload: input });
    dispatchInput({ type: actions.RESET });
  };

  const addTodone = (e) => {
    e.preventDefault();
    dispatchArray2({ type: actions.ADD_TO_DONE, payload: input });
    dispatchInput({ type: actions.RESET });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) =>
            dispatchInput({ type: actions.GRAB, payload: e.target.value })
          }
        />
        <button onClick={addTotodo}>Add_To_Todo</button>
        {/* <button onClick={() => dispatchArray({ type: actions.DELETE })}>
          Delete
        </button> */}
        <button onClick={addToinprogress}>Add_To_Inprogress</button>
        <button onClick={addTodone}>Add_To_Done</button>
      </form>
      <div className="container">
        <div>
          <h2> to do : </h2>
          {array.map((item, index) => (
            <p key={index}>
              {" "}
              <ul>
                <li>{item}</li>
              </ul>
            </p>
          ))}{" "}
        </div>
        <div>
          <h2> in progress :</h2>
          {array1.map((item, index) => (
            <p clas key={index}>
              <ul>
                <li>{item}</li>
              </ul>
            </p>
          ))}
        </div>

        <div>
          <h2> done :</h2>
          {array2.map((item, index) => (
            <p key={index}>
              {" "}
              <ul>
                <li>{item}</li>
              </ul>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddToTodoArray;
