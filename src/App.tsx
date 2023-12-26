import './App.css';
import BlogPosts from './components/BlogPosts/BlogPosts.tsx';
import NewPost from './components/NewPost/NewPost.tsx';

function App() {
  return (
    <div className={'container py-5'}>
      <NewPost />
      <BlogPosts />
    </div>
  );
}

export default App;
