import React, { useContext } from 'react';
import { Button, Grid, Icon } from 'semantic-ui-react';
import { GlobalContext } from '../Context/GlobalState';
import EditCategory from './EditCategory';

const CategoryList = ({ category }) => {
    const ID = category.id
    const { removeCategory } = useContext(GlobalContext);
    const handleDelete = () => {
        removeCategory(ID)
    }
    return (

        <Grid className="cat-card">
            <Grid.Column width={12} textAlign='left'>
                <h2>{category.text}</h2>
                <div className="post-action">
                    <EditCategory category={category}></EditCategory>
                    <Button icon color='red' onClick={handleDelete}>
                        <Icon name='trash' />
                    </Button>
                </div>
            </Grid.Column>
        </Grid>


    );
};

export default CategoryList;