import React, { Component } from 'react';
/*
 * Control Field: It is a form element where the value of the input 
 *                is set by the state of the  conponent not the other way
 *  
 * This is diffrent than the previous example (onChange={()=>this.onInputChange()}) where we used to directly pass a function
 * onChange={this.onInputChange} - whenever onChange is called run this.onInputChange. when we pass a eventhandler like below and 
 * call it the value of 'this' is not going to be the search component. 
 * 
 */
export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        //TypeError: Cannot read property 'setState' of undefined (If following statement is not written)
        this.onInputChange = this.onInputChange.bind(this);
        //'this' has a func called onInputChange, bind that function 
        //to 'this' which is (searchBar) and replace the existing func.

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        //TypeError: Cannot read property 'setState' of undefined (since we didnt bind this to the function)
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault(); //prevents default action

        //Get Weather Data
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Enter a City"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}