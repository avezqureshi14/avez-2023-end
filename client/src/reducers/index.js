import { combineReducers } from "redux";
import posts from './posts';
import auth from './auth';
import bookmarksReducer from "./bookmark";
import commentReducer from "./comment";
const rootReducer = combineReducers({
  posts,
  auth, // Add the auth reducer
  bookmarksReducer,
  commentReducer,
});

export default rootReducer;
