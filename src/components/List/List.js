import React from "react";
// import Form from "../Form/Form";
import styles from "./List.module.css";
const List = () => {
  return (
    <form className={styles.list}>
      <p>list</p>
      <button
        type="button"
        className={styles.btn}
        onClick={() => {
          console.log("клинкули Add Sublist");
        }}
        // onClick={(e) => addItem(e)}
      >
        Add Sublist
      </button>
      <input
        className={styles.input}
        type="button"
        type="text"
        component="input"
        onChange={() => {
          console.log("input List");
        }}
        // value=
        // onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="button"
        className={styles.btn}
        onClick={() => {
          console.log("клинкули Delete");
        }}
        // onClick={(e) => addItem(e)}
      >
        Delete
      </button>

      <button
        type="button"
        className={styles.btn}
        onClick={() => {
          console.log("клинкули Down");
        }}
        // onClick={(e) => addItem(e)}
      >
        Down
      </button>
      <button
        type="button"
        className={styles.btn}
        onClick={() => {
          console.log("клинкули Up");
        }}
        // onClick={(e) => addItem(e)}
      >
        UP
      </button>
    </form>
  );
};
export default List;
