import {
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from '../actions/comment';

const initialState = {
  comments: [],
  error: null,
};


const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        error: null,
      };

    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        error: null,
      };

    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default commentReducer;
