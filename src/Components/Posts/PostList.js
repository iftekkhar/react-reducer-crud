import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import EditPost from './EditPost';

const PostList = ({ post }) => {
    const ID = post.id
    const { removePost } = useContext(GlobalContext);
    const handleDelete = () => {
        removePost(ID)
    }
    return (
        <div>
            {post.id}
            <li>{post.title}</li>
            <span>{post.description}</span>
            <EditPost post={post}></EditPost>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default PostList;