import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import store from '../store/store.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var options = {
      key: YOUTUBE_API_KEY,
      query: 'funny pets'
    };

    searchYouTube(options, (videos) => {
      store.dispatch(changeVideoList(videos));
      store.dispatch(changeVideo(videos[0]));
    });
  }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer/>
          </div>
          <div className="col-md-5">
            <VideoListContainer/>
          </div>
        </div>
      </div>
    );
  }
}
