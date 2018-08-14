import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload       // note items is plural
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload        // note items is singular, different from FETCH_POSTS
      };
    default:
      return state;
  }
}
