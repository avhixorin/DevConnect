import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserStatus = {
  userStatus: boolean;
  isAdmin: boolean;
  user: {
    id: string;
    username: string;
    email: string;
    dateOfBirth: string;
    displayName: string;
    bio: string;
    gender: string;
    password: string;
    avatar: string;
    createdAt: string;
    isDeleted: boolean;
    messages: number;
    receivedMessages: number;
    posts: number;
    comments: number;
    likes: number;
    notifications: number;
    followers: number;
    following: number;
  };
};

const initialState: UserStatus = {
  userStatus: false,
  isAdmin: false,
  user: {
    id: "",
    username: "",
    email: "",
    dateOfBirth: "",
    displayName: "",
    bio: "",
    gender: "",
    password: "",
    avatar: "",
    createdAt: "",
    isDeleted: false,
    messages: 0,
    receivedMessages: 0,
    posts: 0,
    comments: 0,
    likes: 0,
    notifications: 0,
    followers: 0,
    following: 0,
  }
};

const userStatusSlice = createSlice({
  name: "userStatus",
  initialState,
  reducers: {
    setUserStatus: (state, action: PayloadAction<boolean>) => {
      state.userStatus = action.payload;
    },
    setAdmin: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
  },
});

export const { setUserStatus, setAdmin } = userStatusSlice.actions;
export default userStatusSlice;
