import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import PostDetail from '../pages/PostDetails';
import NewPostPage from '../pages/NewPostPage';
import '../App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", date: "2023-05-31", content: "This is the first post." },
    { id: 2, title: "Second Post", date: "2023-06-01", content: "This is the second post." }
  ]);

  return (
    <Router>
      <div className="App">
        <header>
          <h1>My Blog</h1>
          <input type="text" placeholder="Search..." />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/new-post">New Post</Link>
          </nav>
        </header>
        <Routes>
          <Route exact path="/" element={<Home posts={posts} />} />
          <Route path="/posts/:id" element={<PostDetail posts={posts} />} />
          <Route path="/new-post" element={<NewPostPage setPosts={setPosts} posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
