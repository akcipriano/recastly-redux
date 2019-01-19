import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import store from '../store/store.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return function (dispatch) {
    return searchYouTube({YOUTUBE_API_KEY, q}, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });
  };
};

export default handleVideoSearch;

// searchYouTube(options, (videos) => {
//   store.dispatch(changeVideoList(videos));
//   store.dispatch(changeVideo(videos[0]));
// });
// searchYouTube({YOUTUBE_API_KEY, q}, (data) => data)