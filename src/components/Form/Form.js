import React from "react";
import styles from "./Form.module.css";
import Item from "../Item/Item";
const Form = (prorps) => {
  return (
    <div>
      <form className={styles.form}>
        <p>форма</p>
        <input
          className={styles.input}
          type="text"
          component="input"
          //   value=onChange
          onChange={() => {
            console.log("input");
          }}
          // onChange={(e) => setTitle(e.target.value)}
        />

        <button
          className={styles.btn}
          type="button"
          // onClick={(e) => addItem(e)}
          onClick={() => {
            console.log("клинкули");
          }}
        >
          Add
        </button>
      </form>
    </div>
    //   <div>
    //
    //   </div>
  );
};
export default Form;
