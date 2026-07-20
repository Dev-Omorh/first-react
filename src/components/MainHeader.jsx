import classes from "./MainHeader.module.css";
import { MdPost, MdMessage } from "react-icon/md";
function MainHeader({ onCreatePost }) {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.logo}>
          <MdMessage />
          React Poster
        </h1>

        <p>
          <button className={classes.button} onClick={onCreatePost}>
            <MdPostAdd size={18} />
            NewPost
          </button>
        </p>
      </header>
    </>
  );
}

export default MainHeader;
