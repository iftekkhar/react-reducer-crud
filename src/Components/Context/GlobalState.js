import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
export const initialState = {
    posts: [
        {
            id: 0,
            title: "sunt aut facere repellat ",
            description: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis",
            category: ['chocolate', 'vanilla']
        }
    ],
    categories: [
        { id: 0, value: 'laptop', label: 'Laptop' },
        { id: 1, value: 'chocolate', label: 'Chocolate' },
        { id: 2, value: 'strawberry', label: 'Strawberry' },
        { id: 3, value: 'vanilla', label: 'Vanilla' },

    ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // Actions
    const removePost = (id) => {
        dispatch({
            type: 'REMOVE_POST',
            payload: id
        })
    }
    const removeCategory = (id) => {
        dispatch({
            type: 'REMOVE_CAT',
            payload: id
        })
    }
    const addPost = (name) => {
        dispatch({
            type: 'ADD_POST',
            payload: name
        })
    }
    const addCategory = (name) => {
        dispatch({
            type: 'ADD_CAT',
            payload: name
        })
    }
    const editPost = (post) => {
        dispatch({
            type: 'EDIT_POST',
            payload: post
        })
    }
    const editCategory = (post) => {
        dispatch({
            type: 'EDIT_CAT',
            payload: post
        })
    }
    return (
        <GlobalContext.Provider value={{
            posts: state.posts,
            categories: state.categories,
            removePost,
            removeCategory,
            addPost,
            addCategory,
            editPost,
            editCategory
        }}>
            {children}
        </GlobalContext.Provider>
    )
}