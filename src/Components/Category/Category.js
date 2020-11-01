import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import AddCategory from './AddCategory';
import CategoryList from './CategoryList';
import { Container } from '@material-ui/core';

const Category = () => {
    const { categories } = useContext(GlobalContext);
    return (
        <Container>
            <h2> Total Categories: {categories.length}</h2>
            <AddCategory></AddCategory>

            {categories.map(category => (
                <CategoryList key={category.id} category={category}></CategoryList>
            ))}

        </Container>
    );
};

export default Category;