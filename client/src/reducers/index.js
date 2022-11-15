import { combineReducers } from "redux";

import posts from "./posts";

// we set posts equal to posts from reducers/posts.js, but since the key and value are both called posts, we'll only keep one
// posts: posts;
export default combineReducers({ posts });
