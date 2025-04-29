import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MessageProps = {
  userId: string;
  id: string;
  avatar: string;
  name: string;
  message: string;
  time: string;
};

type ListMessagesProps = {
  listMessages: MessageProps[];
};

const initialState: ListMessagesProps = {
  listMessages: [],
};

const meassageSlice = createSlice({
  name: "listMessages",
  initialState,
  reducers: {
    saveMessage: (state, action: PayloadAction<MessageProps>) => {
      state.listMessages.push(action.payload);
    },
  },
});

export const { saveMessage } = meassageSlice.actions;

export default meassageSlice.reducer;
