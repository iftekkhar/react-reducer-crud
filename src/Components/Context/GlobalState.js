import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
export const initialState = {
    posts: [
        {
            id: 0,
            title: "Dogs Roles with Humans",
            description: "Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today.",
            category: ["chocolate", "strawberry"],
        },
        {
            id: 1,
            title: "16 Least Favorite Piano Stores",
            description: "An expert interview about rock bands. How to cheat at country billboards and get away with it. How not knowing free dances makes you a rookie. Why music notes are the new black. 17 ways radio stations can find you the love of your life. 5 ways dance playlists can make you rich. What the world would be like if music apps didn't exist. 7 ways rock fame is completely overrated. The 9 worst country song ringtones in history. Why top new songs are on crack about top new songs.",
            category: ["chocolate", "vanilla", "strawberry"],
        },
    ],
    categories: [
        { id: 0, key: 0, value: "laptop", text: "Laptop", label: "Laptop" },
        { id: 1, key: 1, value: "chocolate", text: "Chocolate", label: "Chocolate" },
        { id: 2, key: 2, value: "strawberry", text: "Strawberry", label: "Strawberry" },
        { id: 3, key: 3, value: "vanilla", text: "Vanilla", label: "Vanilla" },
    ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const removePost = (id) => {
        dispatch({
            type: "REMOVE_POST",
            payload: id,
        });
    };
    const removeCategory = (id) => {
        dispatch({
            type: "REMOVE_CAT",
            payload: id,
        });
    };
    const addPost = (name) => {
        dispatch({
            type: "ADD_POST",
            payload: name,
        });
    };
    const addCategory = (name) => {
        dispatch({
            type: "ADD_CAT",
            payload: name,
        });
    };
    const editPost = (post) => {
        dispatch({
            type: "EDIT_POST",
            payload: post,
        });
    };
    const editCategory = (post) => {
        dispatch({
            type: "EDIT_CAT",
            payload: post,
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                posts: state.posts,
                categories: state.categories,
                removePost,
                removeCategory,
                addPost,
                addCategory,
                editPost,
                editCategory,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
