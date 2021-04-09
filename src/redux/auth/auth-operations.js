import axios from 'axios';
import { registerRequest, registerSuccess, registerError } from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

// const token = () => {};

const register = credential => async dispatch => {
  dispatch(registerRequest());
  console.log(credential);
  try {
    const res = await axios.post('/users/signup', credential);

    dispatch(registerSuccess(res.data));
    console.log(res.data);
  } catch (error) {
    dispatch(registerError(error));
  }
};

export { register };
