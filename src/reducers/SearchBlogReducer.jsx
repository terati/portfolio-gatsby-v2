const initialState = { search: '' };

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE': 
            return {
                search: action.payload
            }
        default:
            return {
                search: ''
            }
    }
}

export default searchReducer;

