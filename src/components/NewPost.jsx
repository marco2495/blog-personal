import React, { useState } from 'react';

function NewPost({ addPost }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date().toISOString().slice(0, 16));
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            date,
            content,
        };
        addPost(newPost);
        setTitle('');
        setDate(new Date().toISOString().slice(0, 16)); // Restablecer la fecha a la actual después de enviar el formulario
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="datetime-local" // Cambiar a "datetime-local" para incluir la hora
                value={Date.now()}
                hidden
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">Add Post</button>
        </form>
    );
}

export default NewPost;
