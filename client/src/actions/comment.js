// Assuming you have Redux Thunk middleware set up for async actions

// Action Types
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

// Action Creators
export const addCommentSuccess = (comment) => ({
  type: ADD_COMMENT_SUCCESS,
  payload: comment,
});

export const addCommentFailure = (error) => ({
  type: ADD_COMMENT_FAILURE,
  payload: error,
});

export const fetchCommentsSuccess = (comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchCommentsFailure = (error) => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error,
});
export const addComment = (commentData, token) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://avez-blog-2023-end.onrender.com/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include the bearer token
        },
        body: JSON.stringify(commentData),
      });

      const data = await response.json();
      dispatch(addCommentSuccess(data.comment));
    } catch (error) {
      dispatch(addCommentFailure(error.message));
    }
  };
};

export const fetchComments = (token) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://avez-blog-2023-end.onrender.com/comments', {
        headers: {
          Authorization: `Bearer ${token}`, // Include the bearer token
        },
      });

      const data = await response.json();
      dispatch(fetchCommentsSuccess(data.comments));
    } catch (error) {
      dispatch(fetchCommentsFailure(error.message));
    }
  };
};
