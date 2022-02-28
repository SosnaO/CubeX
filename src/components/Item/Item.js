import React from "react";
import Form from "../Form/Form";
import List from "../List/List";
import styles from "./Item.module.css";
const Item = ({ todos }) => {



  return (
    <div>
      <div className={styles.item}>
        <p>Item</p>

        {todos.map(({ title, id, sublist }) => (
          <li key={id}>
            <p>
              ID:{id} TITLE: {title} SUBLIST:{sublist}
            </p>
          </li>
        ))}

        {/* <span>ID: TITLE:</span> */}

        {/* <p className={styles.form}>форма из Item</p> */}
        {/* <Form /> */}
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
