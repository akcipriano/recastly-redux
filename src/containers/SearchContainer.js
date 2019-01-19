import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';

var mapStateToProps = (state) => {
  return {
    videos: state.videoList
  };
};

var mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (q) => {
      dispatch(handleVideoSearch(q));
    }
  };
};
//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
