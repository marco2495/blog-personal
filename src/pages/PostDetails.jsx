import React from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';

function PostDetail({ posts }) {
    const { id } = useParams();
    const post = posts.find(p => p.id.toString() === id);

    return (
        <div>
            {post ? (
                <Post title={post.title} date={post.date} content={post.content} />
            ) : (
                <p>Post not found</p>
            )}
        </div>
    );
}

export default PostDetail;
