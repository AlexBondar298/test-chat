import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messages/messagesListSlice";
import userReducer from "./slices/user/userSlice";

export const store = configureStore({
  reducer: {
    message: messageReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
