import classes from './BlogPosts.module.css';
import SinglePost from '../SinglePost/SinglePost.tsx';
import React from 'react';
import { useAppSelector } from '../../hooks/hooks.ts';

const BlogPosts: React.FC = () => {
  const posts = useAppSelector((state) => state.posts.posts);
  return (
    <div>
      <h2 className={classes.heading}>Blog posts</h2>
      <ul>
        {posts.map((post) => {
          return (
            <SinglePost key={post.id} title={post.title} text={post.text} />
          );
        })}
      </ul>
    </div>
  );
};

export default BlogPosts;
