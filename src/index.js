import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YoutubeSearch from 'youtube-api-search';

// Components
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail';

const API_KEY_YOUTUBE = 'AIzaSyB-K28GEEoe8MmNCa83MxxdzSZ9gFwMLdg';

const targetnode = document.getElementById('root');


// 1. Create a new component This component should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos: [],
      selectedVideo: null
    }
    
    // this.searchHandler = this.searchHandler.bind(this);
    this.getVideos = this.getVideos.bind(this);
  }
  
  componentWillMount() {
    // load random youtube content like 'cats' without user interaction
    this.getVideos('cats');
  }
  
  getVideos(searchTerm) {
    // search videos using Youtube Search API
    YoutubeSearch({
        key: API_KEY_YOUTUBE,
        term: searchTerm
      }, (videos) => {
        this.setState({ 
          videos: videos,
          selectedVideo: videos[0]
        });
      }
    );
  }
  
  // searchHandler(searchTerm) {
  //   this.getVideos(searchTerm);
  // }
  
  render() {
    const videoSearch = _.debounce( (searchTerm) => { this.getVideos(searchTerm) }, 300);
    return (
      <div className="row">
        <SearchBar updateSearchTerm={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({ selectedVideo })} selectedVideo={this.state.selectedVideo}/>
      </div>
    )
  }
};

// 2. After creating component(s), make sure they are served to DOM
ReactDOM.render(<App />, targetnode);
