import { getPosts } from '../actions/actions'
export const fetchPosts = () => {
   return async (dispatch, getState) => {
      await fetch(
         `https://jsonplaceholder.typicode.com/photos?_limit=${
            getState().paginate
         }`
      )
         .then((response) => response.json())
         .then((response) => dispatch(getPosts(response)))
   }
}
