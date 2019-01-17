import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return function () {
    return {
      type: 'SEARCH_VIDEO',
      videos: searchYouTube({YOUTUBE_API_KEY, q}, (data) => data)
    };
  };
};

export default handleVideoSearch;
