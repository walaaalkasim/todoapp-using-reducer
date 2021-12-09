import React from "react";
import "./App.css";
import AddToTodoArray from "./components/AddToTodoArray";
import AddToInprogress from "./components/AddToInprogress";
import AddToDone from "./components/AddToDone";
const App = () => {
  return (
    <main>
      <AddToTodoArray />
    </main>
  );
};

export default App;
