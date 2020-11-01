import React, { useContext } from 'react';
import { Button, Grid, Icon } from 'semantic-ui-react';
import { GlobalContext } from '../Context/GlobalState';
import EditPost from './EditPost';

const PostList = ({ post }) => {
    const ID = post.id
    const { removePost } = useContext(GlobalContext);
    const handleDelete = () => {
        removePost(ID)
    }
    return (

        <Grid className="post-card">

            <Grid.Column width={12} textAlign='left'>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p><strong>Category:</strong> {post.category.map((cat, index) => (

                    <span key={index} className="category-list"><span>{cat}</span></span>
                ))}</p>
                <div className="post-action">
                    <EditPost post={post}></EditPost>
                    <Button icon color='red' onClick={handleDelete}>
                        <Icon name='trash' />
                    </Button>
                </div>
            </Grid.Column>
        </Grid>

    );
};

export default PostList;