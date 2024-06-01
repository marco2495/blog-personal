import React, { useState } from 'react';

function NewPostPage({ setPosts, posts }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: posts.length + 1,
            title,
            date,
            content,
        };
        setPosts([...posts, newPost]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
            <button type="submit">Add Post</button>
        </form>
    );
}

export default NewPostPage;
