import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { duplicateValidationMiddleware } from "./userSlice";


const store = configureStore({
    reducer : {
        user: userSlice
    },
     middleware :getDefaultMiddleware => getDefaultMiddleware().concat(duplicateValidationMiddleware)
});

store.subscribe(()=> {
    const storeData = store.getState();
    console.log(storeData, " Jai bhole ki")
    localStorage.setItem('user', JSON.stringify(storeData.user))
});
export default store;
  