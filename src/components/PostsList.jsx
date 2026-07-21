import { useState } from "react";
import Post from "./Post";
import classes from "./Post.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList({ isPosting }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalVisible, setModalVisible] = useState(true);

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}

      <div className={classes.post}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Maxilian" body="Check out the full course" />
      </div>
    </>
  );
}

export default PostsList;
