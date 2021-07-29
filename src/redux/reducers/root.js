import { combineReducers } from 'redux';

import { authentication } from '../reducers/authentication';
import { burgerList } from '../reducers/burgerList';

const rootReducer = combineReducers({
  authentication,
  burgerList,
});

export default rootReducer;
