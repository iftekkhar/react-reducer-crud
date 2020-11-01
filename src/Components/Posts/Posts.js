import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import AddPost from './AddPost';
import PostList from './PostList';

const Posts = () => {
    const { posts, categories } = useContext(GlobalContext);
    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            <h2>Categories: {categories.length}</h2>
            <h1>Posts</h1>
            <AddPost></AddPost>
            {posts.map(post => (
                <PostList key={post.id} post={post}></PostList>
            ))}
        </div>
    );
};

export default Posts;