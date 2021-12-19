import {CREATE,DELETE,UPDATE,FETCH_ALL} from "../constants/actionTypes";
//reducer is a function its equal to a function it accepts state and also it accepts action based on action type we are doing if else statement or swicth here
export default (posts=[], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post)=>post._id!==action.payload);//we are gonna keep all the post except post._id is qual to action.payload 
      //case "LIKE":
        //return posts.map((post)=>post._id===action.payload._id ? action.payload:post);
      case UPDATE:
      return posts.map((post)=>post._id===action.payload._id ? action.payload:post);//action.payload is the updated post
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
 
    default:
        return posts;
  } 
}  
 