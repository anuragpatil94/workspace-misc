import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * A book-detail will render whenever there is a selected book
 * We make a container when we want the component to touch the redux state directly.
 * Here we want to use the redux state 'activeBook' to directly connect book-detail 
 */
class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div> Select a book to get started.</div>
        }
        return (
            <div>
                <h3>Details For: </h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(MapStateToProps)(BookDetail);