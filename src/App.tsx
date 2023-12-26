import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout/RootLayout.tsx';
import NewPost from './components/NewPost/NewPost.tsx';
import BlogPosts from './components/BlogPosts/BlogPosts.tsx';
import Home from './components/Home/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/create-post', element: <NewPost /> },
      { path: '/blog', element: <BlogPosts /> },
    ],
  },
]);

function App() {
  return (
    <div className={'app-container py-5'}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
