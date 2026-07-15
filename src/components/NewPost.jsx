import classes from "./NewPost.module.css";

function NewPost() {
  function changeBodyHandler(event) {
    console.log(event.target.value);
  }

  return (
    <div className="frm">
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name </label>
          <input type="text" id="name" required />
        </p>
      </form>
    </div>
  );
}

export default NewPost;
