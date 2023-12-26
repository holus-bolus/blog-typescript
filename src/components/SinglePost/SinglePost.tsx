import classes from './SinglePost.module.css';
const SinglePost = (props: { title: string; text: string }) => {
  return (
    <li className={classes.post}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </li>
  );
};

export default SinglePost;
