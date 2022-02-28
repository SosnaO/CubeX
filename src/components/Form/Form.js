import React from "react";
import styles from "./Form.module.css";
import Item from "../Item/Item";
const Form = (props) => {
    // const state = {
    //     // title: title,
    //     id: Date.now(),
    //     sublist: [],
    // };
    // const [title, setTitle] = useState("");
    

    //   console.log("state", state);


    // const addItem = useCallback(
    //     (e) => {
    //         e.preventDefault();
    //         console.log(title);
    //         if (!title) {
    //             return;
    //         }
    //     })

// 
//  );
  return (
    <div>
      <form className={styles.form}>
        <p>форма</p>
        <input
          className={styles.input}
          type="text"
          component="input"
          //   value={state.title}
          //   value=onChange
          onChange={() => {
            console.log("input");
          }}
          // onChange={(e) => setTitle(e.target.value)}
        />

        <button
          className={styles.btn}
          type="button"
        //   onClick={addItem}
        //   onClick={(e) => addItem(e)}
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
