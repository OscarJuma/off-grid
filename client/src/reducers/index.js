// Required Dependencies
import { combineReducers } from 'redux';

// Required files
import authReducer from './authReducer';
import errorReducer from './errorReducer';

////// These files are not ready Below Here //////////
//import profileReducer from './profileReducer';
//import postReducer from './postReducer';

// Export the reducers in an object component
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  //profile: profileReducer,
  //post: postReducer
});
