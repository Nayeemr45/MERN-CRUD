import * as api from '../api';


//Action Creators

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPost();

        dispatch({ type: 'FETCH_ALL' , playload: data });

    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', playload: data }); 
    } catch (error) {
        console.log(error);
        
    }
}