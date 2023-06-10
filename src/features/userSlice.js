import { createSlice } from "@reduxjs/toolkit";

const users = localStorage.getItem('user')
const defaultUser = {
    userList: [],
    user: {
        username: "",
        email: "",
        birthday: "",
        password: "",
    }
}
const initialState = users ? JSON.parse(users) : defaultUser;

const userSlice = createSlice({
    name: "userDetails",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            const find = state.userList.find(user => user.email == action.payload.email)
            if (find && find.password == action.payload.password) {
                state.authenticate = true;
                state.user = find
            } else {
                state.authenticate = false;
                alert("Credentials is not correct")
            }
        },

        logout: (state, action) => {
            state.authenticate = false;
        },

        register: (state, action) => {
            const newState = {
                user: {},
            };
            newState.user.username = action.payload.username
            newState.user.email = action.payload.email;
            newState.user.birthday = action.payload.birthday;
            newState.user.password = action.payload.password;
            newState.userList = state.userList ? state.userList : [];
            newState.userList.push(newState.user)
            newState.authenticate = true;   
            state.authenticate = true;
            state = newState;
            alert("User registered successfully")
        }
    }
});

export const duplicateValidationMiddleware = (store) => (next) => (action) => {
    if (action.type === 'userDetails/register') {
        const currentState = store.getState()
        const { email } = action.payload;
        if (currentState.user.userList.findIndex(a => a.email == email) > -1) {
            alert("email id already exist")
            return
        }
    }
    next(action);
};

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;