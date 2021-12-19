
import {CREATE,DELETE,UPDATE,FETCH_ALL} from "../constants/actionTypes";
import * as api from "../api"; //we access everything from actions as api

//action creators are function that return actions;
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    //making the api request to update the post
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } 
  catch (error) {
    console.log(error);
  }
};

export const likePost= (id) => async (dispatch) =>{
  try{
    const { data } = await api.likePost(id);
    dispatch({ type: UPDATE, payload: data });
  }
  catch(error){
    console.log(error);
  }

}