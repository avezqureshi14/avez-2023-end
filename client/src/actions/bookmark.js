import { FETCH_BOOKMARKS, TOGGLE_BOOKMARK } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const toggleBookmark = (blog) => async (dispatch, getState) => {
  try {
    // Perform API call to toggle the bookmark for the specified blog
    await api.toggleBookmark(blog);

    // Assuming your toggleBookmark API endpoint handles the toggling successfully
    
    // Dispatch the TOGGLE_BOOKMARK action with the blog payload
    dispatch({ type: TOGGLE_BOOKMARK, payload: blog });
  } catch (error) {
    console.error("Error toggling bookmark:", error.message);
    // Handle errors if the toggleBookmark API call fails
  }
};


export const fetchBookmarks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBookmarks();
    dispatch({ type: FETCH_BOOKMARKS, payload: data });
  } catch (error) {
    console.error("Error fetching bookmarks:", error.message);
  }
};
