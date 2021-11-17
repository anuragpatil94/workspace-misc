//Changing of state is what actions and action creators are for
export function selectBook(book) {
    // selectBook is an ActionCreator and returns a action,
    //An object with TYPE property and sometime contains a payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}