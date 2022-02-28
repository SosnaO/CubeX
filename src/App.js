import React from "react";
import Form from "./components/Form/Form";
import Item from "./components/Item/Item";
import List from "./components/List/List";
import Sublist from "./components/Sublist/Sublist";
const App = () => {
  const state = {
    todos: [
      {
        // title: title,
        title: 111,
        id: Date.now(),
        sublist: [1, 1, 1],
      },
      {
        title: 12345,
        id: Date.now(),
        sublist: [2222223, 2222222222, 2222222],
      },
    ],
  };

  return (
    <>
      <Form />
      <Item todos={state.todos} />
      {/* <List /> */}
      <Sublist />
    </>
  );
};
export default App;
