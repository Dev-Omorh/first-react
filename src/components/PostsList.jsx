import Post from "./Post";
import classes from "./Post.module.css";

function PostsList() {
  return (
    <ul className={classes.post}>
      <Post author="Silian" body="React.js is awesome" />
      <Post author="Kanuel" body="Check out the full content" />
    </ul>
  );
}

export default PostsList;
