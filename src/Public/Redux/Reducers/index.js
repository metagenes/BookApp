import {combineReducers} from 'redux';

import borrow from './borrowBooks';


const appReducer = combineReducers ({
  borrow,
});

export default appReducer;
