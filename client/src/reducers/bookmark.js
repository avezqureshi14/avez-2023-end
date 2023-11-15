import { TOGGLE_BOOKMARK, FETCH_BOOKMARKS } from "../constants/actionTypes";

const initialState = [];

const bookmarksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BOOKMARK:
      const blogObject = typeof action.payload.blog === 'string' ? JSON.parse(action.payload.blog) : action.payload.blog;
      const blogId = blogObject._id;
      
      const existingIndex = state.findIndex(
        (bookmark) => bookmark.blog._id === blogId
      );

      if (existingIndex !== -1) {
        return state.filter((bookmark) => bookmark.blog._id !== blogId);
      } else {
        return [...state, { blog: blogObject }];
      }
    case FETCH_BOOKMARKS:
      return action.payload || [];
    default:
      return state;
  }
};

export default bookmarksReducer;
