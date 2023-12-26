import SinglePost from '../SinglePost/SinglePost.tsx';
import React from 'react';
import { useAppSelector } from '../../hooks/hooks.ts';

const BlogPosts: React.FC = () => {
  const posts = useAppSelector((state) => state.posts.posts);
  return (
    <div>
      <h2>Blog posts</h2>
      <ul className={'list-group'}>
        {posts.map((post) => {
          return <SinglePost key={post.id} todo={post} />;
        })}
      </ul>
    </div>
  );
};

export default BlogPosts;
