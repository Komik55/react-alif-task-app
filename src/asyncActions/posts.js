import { getPosts } from '../actions/actions'
export const fetchPosts = () => {
   return async (dispatch) => {
      await fetch('https://jsonplaceholder.typicode.com/photos')
         .then((response) => response.json())
         .then((response) => dispatch(getPosts(response)))
   }
}
