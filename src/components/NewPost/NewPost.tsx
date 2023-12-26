import classes from './NewPost.module.css';
import { useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/blogSlice.ts';
import { v4 as uuidv4 } from 'uuid';

const NewPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [text, setPostText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.trim().length === 0 || text.trim().length === 0) {
      return;
    }
    dispatch(addPost({ id: uuidv4(), title, text }));
    setTitle('');
    setPostText('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className={classes.titleInput}
            type="text"
            name="post-title"
            id="post-title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder={'Enter the post title'}
          />
        </label>
        <label>
          <textarea
            name="post-text"
            id="post-text"
            value={text}
            onChange={(event) => setPostText(event.target.value)}
            placeholder={'Enter the post text'}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NewPost;
