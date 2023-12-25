// state này là trạng thái của Redux
const initState = {
    user: [
        { id: 1, name: 'Trung Nguyen' },
        { id: 2, name: 'Origin Dev'},
        { id: 3, name: 'Dau To' },
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'DELETE_USER': {
            let users = state.user;
            users = users.filter(item => item.id !== action.payload.id);
            return {
                ...state, users
            }
        }
        case 'CREATE_USER': {
            let id = Math.floor(Math.random() * 100)
            let user = { id: id, name: `random${id}` };
            return {
                ...state, users: [...state.user, user]
            }
        }
        default:
            return state;
    }
    return state;
}

export default rootReducer;
