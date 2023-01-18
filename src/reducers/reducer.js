import { GET_DATA, PAGINATE_DATA } from '../actions/actionsTypes'

// State of store
const initialState = {
   posts: [],
   paginate: 20,
}

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_DATA:
         return {
            ...state,
            posts: [...state.posts, ...action.payload],
         }
      case PAGINATE_DATA:
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
