import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  console.log(q);
  //TODO:  Write an asynchronous action to handle a video search!


  // return {
  //   type: 'SEARCH_VIDEO',
  //   videos: searchYouTube({YOUTUBE_API_KEY, q}, )
  // };
  var options = {
    key: YOUTUBE_API_KEY,
    query: q
  };

  return function () {
    return {
      type: 'SEARCH_VIDEO',
      // ({key, query, max = 5}, callback)
      videos: searchYouTube(options, (data) => data)
    };
  };
};

export default handleVideoSearch;
