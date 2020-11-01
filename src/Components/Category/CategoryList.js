import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import EditCategory from './EditCategory';

const CategoryList = ({ category }) => {
    const ID = category.id
    const { removeCategory } = useContext(GlobalContext);
    const handleDelete = () => {
        removeCategory(ID)
    }
    return (
        <div>
            {category.id}
            <li>{category.label}</li>
            <EditCategory category={category}></EditCategory>
            <button onClick={handleDelete}>Delete</button>
            <hr />
        </div>
    );
};

export default CategoryList;