//import React from 'react';
const React = require('react'); //how to work with component
const ReactDOM = require('react-dom');

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCEnfhD7D2nVyX7VM8GXpYom0mYMjJg70o";

/*
Create a new component. This component should 
produce HTML
JSX
*/
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

/*
Take this component's generarated HTML 
and put it on the page (in the DOM)
*/

ReactDOM.render(<App />, document.querySelector('.container')); // Here < /> is used to instantiate the const App