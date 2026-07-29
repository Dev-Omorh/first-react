import { useState } from "react";

import classes from "./NewPost.module.css";

function NewPost({ onBodyChange, onAuthorChange, onCancel }) {

  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <div className="frm">
      <form className={classes.form} onSubmit={}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={onBodyChange} />
        </p>

        <p>
          <label htmlFor="name">Your name </label>
          <input type="text" id="name" required onChange={onAuthorChange} />
        </p>

        <p className={classes.action}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </div>
  );
}

export default NewPost;
