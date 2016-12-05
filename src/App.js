import _ from 'lodash';

// Create new component, produce some html
import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';

//Components:
import SearchBar from './components/search_bar';  //Note relative paths, .js extension isn't necessary
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//Special API Key for YouTube, hidden because of Gitignore
import {API_KEY} from './API_KEY';  
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('pokemon');
  }

  //separate method for searching for videos
  videoSearch(term) {
    //YTSearch takes an object that uses the api key and a search term, 2nd param is callback function for data.
    YTSearch({key: API_KEY, term: term}, videos => { 
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      }); 
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }  //function to set the video, passing down to videoList
          videos={this.state.videos} />
      </div>
      )
    //You can include components inside others, usually use () for multi-line HTML.
  }
}

export default App;
