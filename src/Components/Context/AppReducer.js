export default (state, action) => {
    switch (action.type) {

        case 'REMOVE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => {
                    return post.id !== action.payload;
                })
            }
        case 'REMOVE_CAT':
            return {
                ...state,
                categories: state.categories.filter(cat => {
                    return cat.id !== action.payload;
                })
            }
        case 'ADD_POST':
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case 'ADD_CAT':
            return {
                ...state,
                categories: [action.payload, ...state.categories]
            }
        case 'EDIT_POST':
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.id) {
                        return action.payload
                    }
                    return post;
                }
                )
            }
        case 'EDIT_CAT':
            return {
                ...state,
                categories: state.categories.map(cat => {
                    if (cat.id === action.payload.id) {
                        return action.payload
                    }
                    return cat;
                }
                )
            }

        default:
            return state;
    }
}