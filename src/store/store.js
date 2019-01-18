import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

//***CONFIRM: applyMiddleware can be passed as the second argument
var store = createStore(rootReducer, applyMiddleware(thunk));
//App.state.videos
//App.state.currentVideo
//Search.state.value

export default store;