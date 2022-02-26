import React from "react";
import Form from "../Form/Form";
import List from "../List/List";
import styles from "./Item.module.css";
const Item = () => {
  return (
    <div>
      <div className={styles.item}>
        <p>Item</p>
        <span>ID: TITLE:</span>

              <p className={styles.form}>форма из Item</p>
         <List />       
{/* 
      
        <button
          className={styles.btn}
          // onClick={(e) => addItem(e)}
        >
          Add Sublist
        </button> */}
      </div>
    </div>
  );
};
export default Item;
