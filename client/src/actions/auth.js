import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
  window.location.reload(); // Reload the page after logout

  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    window.location.reload(); // Reload the page after logout

  } catch (error) {
    console.log(error);
  }
};