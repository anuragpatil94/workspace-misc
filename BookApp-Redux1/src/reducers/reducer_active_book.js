/**
 * state argument is not application state, 
 * only the state this function is responsible for
 */
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
            break;

        default:
            return state
            break;
    }
    return state
}