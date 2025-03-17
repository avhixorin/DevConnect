import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserStatus = {
    user: boolean;
    isAdmin: boolean;
}

const initialState: UserStatus = {
    user: false,
    isAdmin: false
}

const userStatusSlice = createSlice({
    name: 'userStatus',
    initialState,
    reducers: {
        setUser: (state, action:PayloadAction<boolean>) => {
            state.user = action.payload;
        },
        setAdmin: (state, action:PayloadAction<boolean>) => {
            state.isAdmin = action.payload;
        }
    }
})

export const { setUser, setAdmin } = userStatusSlice.actions;
export default userStatusSlice;