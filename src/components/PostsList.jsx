import { useState } from "react";
import Post from "./Post";
import classes from "./Post.module.css";
import NewPost from "./NewPost";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [author, setEnterBody] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.post}>
        <Post author="Silian" body={enteredBody} />
        <Post author="Kanuel" body={authorCh} />
      </ul>
    </>
  );
}

export default PostsList;
