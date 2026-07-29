import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <div className="frm">
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={props.onBodyChange} />
        </p>

        <p>
          <label htmlFor="name">Your name </label>
          <input
            type="text"
            id="name"
            required
            onChange={props.onAuthorChange}
          />
        </p>

        <p className={classes.action}>
          <button>Cancel</button>
          <button>Submit</button>
        </p>
      </form>
    </div>
  );
}

export default NewPost;
