import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import AddPost from './AddPost';
import PostList from './PostList';
import { Container } from '@material-ui/core';

const Posts = () => {
    const { posts } = useContext(GlobalContext);
    return (
        <Container>
            <h2>Total Posts : {posts.length}</h2>
            <AddPost></AddPost>

            {posts.map(post => (
                <PostList key={post.id} post={post}></PostList>
            ))}
        </Container>
    );
};

export default Posts;