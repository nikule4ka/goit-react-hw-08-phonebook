import axios from 'axios';
import { registerRequest, registerSuccess, registerError } from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

// const token = () => {};

const register = credential => async dispatch => {
  dispatch(registerRequest());

  try {
    const res = await axios.post('/users/signup', credential);
    console.log(res);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerError(error));
  }
};

export { register };
