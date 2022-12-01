import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

// our state in this app is going to be posts, so we'll rename state to post here
const reducers = (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);

    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    // putting two cases below each other will do the same thing for both
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};

export default reducers;
