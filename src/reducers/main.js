import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

var rootReducer = (state = {}, action) => {
  return {
    currentVideo: currentVideoReducer(state.currentVideo, action),
    videoList: videoListReducer(state.videos, action)
    // combineReducers({ currentVideoReducer, videoListReducer})

  };

};

// var rootReducer = combineReducers({ currentVideoReducer, videoListReducer});

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.


export default rootReducer;
