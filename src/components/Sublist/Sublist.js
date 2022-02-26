import React from "react";
// import Form from "../Form/Form";
import styles from "./Sublist.module.css";
const Sublist = () => {
  return (
    <form className={styles.sublist}>
      <p>Add Sublist</p>
      <button
        type="button"
        className={styles.btn}
        onClick={() => {
          console.log("клинкули Add Subblist");
        }}
        // onClick={(e) => addItem(e)}
      >
        Add Sublist
      </button>
      <input
        className={styles.input}
        type="text"
        component="input"
        onChange={(e) => {
          console.log("input Sublist", e.currentTarget);
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
export default Sublist;
