import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

/**CONTAINER
 * React and Redux are 2 seperate libraries which are connected through containers
 * It is a component which has a direct access to the state that is produced by Redux
 * 
 * Why BookList is a COntainer?
 * In General we make the most parent component that cares about the particular piece of state to be a container 
 * Here booklist cares about the list of books where app.js is just a component.
 */

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">{book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    //Whatever is returned will show up in the props inside the BookList
    //*When the state changes the mapStateToProps will instantly re-render
    return {
        books: state.books
    };
}

// Anything returned from function will end up as props on the book-list container
function mapDispatchToProps(dispatch) {
    // dispatch receives the actions and dispatches them to the reducers
    // Whenever selectBook is called the result should be passed to all of the reducers

    // bindActionCreators Purpose: Sending the actions to all the reducers 
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know 
// about this new dispatch method, selectBook. MAke it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);