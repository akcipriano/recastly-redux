import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import store from '../store/store.js';
import Search from './Search.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: null
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('Koala');
  }

  handleVideoListEntryTitleClick(video) {
    this.setState({currentVideo: video});
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  handleSearchInputChange(value) {
    console.log(value);
  }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <Search handleSearchInputChange={this.handleSearchInputChange.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}
