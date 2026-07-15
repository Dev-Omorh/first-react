import classes from "./NewPost.module.css";

function NewPost() {
  return (
    <div>
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="body">Your name </label>
          <input type="text" id="name" required />
        </p>
      </form>
    </div>
  );
}

export default NewPost;
