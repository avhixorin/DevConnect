import { configureStore } from "@reduxjs/toolkit";
import userStatusSlice from "../features/userStatusSlice";
const store = configureStore({
    reducer: {
        userStatus: userStatusSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;