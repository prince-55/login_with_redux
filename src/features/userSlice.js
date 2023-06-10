import { createAction, createSlice } from "@reduxjs/toolkit";
// import { Navigate } from "react-router-dom";

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
            // localStorage.setItem('authenticate', false)
        },

        register: (state, action) => {
            console.log(action.payload, state);
            const newState = {
                user: {}
            };
            newState.user.username = action.payload.username
            newState.user.email = action.payload.email;
            newState.user.birthday = action.payload.birthday;
            newState.user.password = action.payload.password;
            newState.userList = state.userList ? state.userList : [];
            newState.userList.push(newState.user)
            console.log(newState, state, "tota ram aa gya");
            // localStorage.setItem('users', JSON.stringify(newState.userList));
            // localStorage.setItem('authenticate', true);
            state = newState;
            // return deepCopy(newState)
        }

    }
});

export const duplicateValidationMiddleware = (store) => (next) => (action) => {
    if (action.type === 'userDetails/register') {
        const currentState = store.getState()
        const { email } = action.payload;
        console.log(store, email, currentState, "testing 1")
        if (currentState.user.userList.findIndex(a => a.email == email) > -1) {
            alert("email id already exist")
            return
        }
        //   if (typeof count !== 'number' || count < 0) {
        //     console.log('Invalid count:', count);
        //     return; // Skip the action
        //   }
    }

    // Allow the action to proceed
    next(action);
};

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;