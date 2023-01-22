import { getPosts, loading } from "../actions/actions";

// Making async request with Redux-thunk

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    dispatch(loading(true));
    await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=${
        getState().paginate
      }`
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch(loading(false));
        dispatch(getPosts(response));
      });
  };
};
