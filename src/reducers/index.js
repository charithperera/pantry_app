import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import diaryReducer from './diary_reducer';


const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  diary: diaryReducer
});

export default rootReducer;
