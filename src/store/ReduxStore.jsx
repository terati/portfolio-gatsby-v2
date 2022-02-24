import { createStore } from 'redux';
import searchReducer from '../reducers/SearchBlogReducer';

const initialState = {
    search: ''
}
const store = createStore(searchReducer, initialState);

export default store;