import Post from "./Post";
import classes from "./Post.module.css";
import NewPost from "./NewPost";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.post}>
        <Post author="Silian" body="React.js is awesome" />
        <Post author="Kanuel" body="Check out the full content" />
      </ul>
    </>
  );
}

export default PostsList;
