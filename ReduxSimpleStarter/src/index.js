import React, { Component } from 'react'; //how to work with component
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
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

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        //for VideoList
        //Here we are taking videos data from parent Component 'App' State 
        //and sending its reference to child Component 'VideoList'
        //passing data like this is called passing props
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}
/*
Take this component's generarated HTML 
and put it on the page (in the DOM)
*/

ReactDOM.render(<App />, document.querySelector('.container')); // Here < /> is used to instantiate the const App