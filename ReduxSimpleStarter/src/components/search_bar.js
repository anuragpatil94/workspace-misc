import React, { Component } from 'react';

//Functional Component
// const searchBar = () => {
//     return <input />;
// }

//Class based Component
class SearchBar extends Component {
    //A way to render itself.
    //A Class must have Render Method
    //Class States, If they change render() reruns.
    //Constructor is the only function that is called atomatically. which means that this function is called everytime
    constructor(props) {
        super(props);

        //State is a plain javascript object that exist on any component that is a class based ocmponent
        //Each instace of a class based component has a copy of state
        //Initialize it by defining a constructor method
        this.state = { term: '' }; //properties that we want to record
        this.onInputChange = this.onInputChange.bind(this)
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={this.onInputChange} />
            </div>
        );
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
        //console.log(event.target.value);
    }
}



export default SearchBar;