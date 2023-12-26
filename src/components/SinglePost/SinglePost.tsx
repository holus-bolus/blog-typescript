import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks.ts';
import { deletePost, editPost } from '../../redux/blogSlice.ts';

interface PostItemProps {
  todo: {
    id: string;
    title: string;
    text: string;
  };
}

const SinglePost: React.FC<PostItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const [title, setTitle] = useState(todo.title);
  const handleEdit = () => {
    if (isEditing) {
      dispatch(editPost({ id: todo.id, title, text }));
    }
    setIsEditing(!isEditing);
  };

  const handleDeletePost = () => {
    dispatch(deletePost(todo.id));
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <>
          <input
            type="text"
            className="form-control mr-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </>
      ) : (
        <>
          <h4>{todo.title}</h4>
          <p>{todo.text}</p>
        </>
      )}

      <div>
        <button className="btn btn-secondary mr-2" onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="btn btn-danger" onClick={handleDeletePost}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default SinglePost;
