import { GET_POST, PAGINATE_POST, SEARCH_POST } from '../actions/actionsTypes'

// State of store
const initialState = {
   posts: [],
   paginate: 10,
}

export const reducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case GET_POST:
         return {
            ...state,
            posts: [...state.posts, ...payload],
         }
      case SEARCH_POST:
         return {
            ...state,
            posts: [...state.posts].filter(
               ({ title }) =>
                  title.toLowerCase().indexOf(payload.toLowerCase()) !== -1
            ),
         }
      case PAGINATE_POST:
         return {
            ...state,
            posts: [...state.posts].filter(
               (item) => item.length >= state.paginate
            ),
         }
      default:
         return state
   }
}
