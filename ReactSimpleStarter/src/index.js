import _ from 'lodash';
import React, { Component } from 'react'; //how to work with component
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyCEnfhD7D2nVyX7VM8GXpYom0mYMjJg70o";

/*
Create a new component. This component should 
produce HTML
JSX
*/
class App extends Component {
    constructor(props) {
        //props here is a object and is available anywhere and any defined method.
        //In functional method is works like a argument
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        //For throttling Search
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        //for VideoList
        //Here we are taking videos data from parent Component 'App' State 
        //and sending its reference to child Component 'VideoList'
        //passing data like this is called passing props
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}
/*
Take this component's generarated HTML
and put it on the page (in the DOM)
*/

ReactDOM.render(<App />, document.querySelector('.container')); // Here < /> is used to instantiate the const App