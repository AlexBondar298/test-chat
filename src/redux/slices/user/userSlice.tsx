import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import BotIcon from "../../../assets/icons/bot-icon.svg";
import UserIcon from "../../../assets/icons/user-icon.svg";

type UserProps = {
  id: string;
  avatar: string;
  name: string;
};

type ListUserProps = {
  listUser: UserProps[];
};

const initialState: ListUserProps = {
  listUser: [
    {
      id: "1",
      avatar: BotIcon,
      name: "Bot",
    },
    {
      id: "2",
      avatar: UserIcon,
      name: "Alex",
    },
  ],
};

const userSlice = createSlice({
  name: "listUser",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<UserProps>) => {
      state.listUser.push(action.payload);
    },
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
