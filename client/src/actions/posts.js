import * as api from "../api";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

// Action creators
// redux thunk lets us use the below syntax "async (dispatch) =>". We use 2 arrows
// export const getPosts = () => async (dispatch) => {
//   try {
//     // trying to fetch all the data from the api
//     const { data } = await api.fetchPosts();
//     dispatch({ type: "FETCH_ALL", payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }

//   //   const action = { type: "FETCH_ALL", payload: [] };
//   //   with redux thunk, instead of return, we use dispatch
//   //   return action;
// };

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
