import React from 'react';
import NewPost from '../components/NewPost';

function NewPostPage({ setPosts, posts }) {
    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    return (
        <div>
            <h2>Create a New Post</h2>
            <NewPost addPost={addPost} />
        </div>
    );
}

export default NewPostPage;
