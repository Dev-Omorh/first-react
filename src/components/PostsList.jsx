import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}

      <div className={classes.post}>
        <Post author="Maxilian" body="Check out the full course" />
      </div>
    </>
  );
}

export default PostsList;
