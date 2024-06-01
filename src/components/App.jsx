import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../pages/Home';
import PostDetail from './pages/PostDetail';
import NewPostPage from '../pages/NewPostPage';
import './App.css';

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
        <Switch>
          <Route exact path="/" component={() => <Home posts={posts} />} />
          <Route path="/posts/:id" component={() => <PostDetail posts={posts} />} />
          <Route path="/new-post" component={() => <NewPostPage setPosts={setPosts} posts={posts} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
