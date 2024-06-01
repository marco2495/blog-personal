import React from 'react';
import Post from '../components/Post';
import { Link } from 'react-router-dom';

function Home({ posts }) {
    return (
        <div>
            {posts.map(post => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                    <Post title={post.title} date={post.date} content={post.content} />
                </Link>
            ))}
        </div>
    );
}

export default Home;
