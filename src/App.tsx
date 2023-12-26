import './App.css';
import BlogPosts from './components/BlogPosts/BlogPosts.tsx';
import NewPost from './components/NewPost/NewPost.tsx';

function App() {
  return (
    <>
      <NewPost />
      <BlogPosts />
    </>
  );
}

export default App;
