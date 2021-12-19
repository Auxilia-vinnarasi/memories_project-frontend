import axios from "axios";//to make it API calls;

//const url="http://localhost:5000/posts";  //backend//it returns all the post currently we are having in db; 

const url="https://memories-auxilia-project.herokuapp.com/posts";

export const fetchPosts=()=>axios.get(url);
export const createPost=(newPost)=>axios.post(url,newPost);

export const updatePost= (id,updatedPost)=>axios.patch(`${url}/${id}`,updatedPost);   
//not only url but id, id mentioned:what post do we want to update  

export const deletePost=(id)=>axios.delete(`${url}/${id}`);

export const likePost=(id)=>axios.patch(`${url}/${id}/likePost`);