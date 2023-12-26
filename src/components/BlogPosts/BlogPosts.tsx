import classes from "./BlogPosts.module.css";
import SinglePost from "../SinglePost/SinglePost.tsx";

const BlogPosts = () => {

    const posts = [
        {title: "Post title 1", text: "Post text 1"},
        {title: "Post title 2", text: "Post text 2"},
        {title: "Post title 3", text: "Post text 3"},
    ]
    return (
        <div>
            <h2 className={classes.heading}>Blog posts</h2>
            <ul>
                {posts.map(post => {
                    return <SinglePost title={post.title} text={post.text}/>
                })}
            </ul>
        </div>
    );
};

export default BlogPosts;
