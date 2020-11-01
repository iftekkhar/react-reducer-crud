import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import AddCategory from './AddCategory';
import CategoryList from './CategoryList';

const Category = () => {
    const { posts, categories } = useContext(GlobalContext);
    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            <h2>Categories: {categories.length}</h2>
            <h1>Category</h1>
            <AddCategory></AddCategory>
            {categories.map(category => (
                <CategoryList key={category.id} category={category}></CategoryList>
            ))}
        </div>
    );
};

export default Category;