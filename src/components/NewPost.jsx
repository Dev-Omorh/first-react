import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <div className="frm">
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={props.onBodyChange} />
        </p>
        <p>{enteredBody}</p>
        <p>
          <label htmlFor="name">Your name </label>
          <input
            type="text"
            id="name"
            required
            onAuthorChange={props.authorChangeHandler}
          />
        </p>
      </form>
    </div>
  );
}

export default NewPost;
