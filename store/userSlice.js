import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    username: "John Doe",
    profileUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=Brian",
  },
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload?.username
    }
  }
})

export const { updateUsername } = userSlice.actions;
export default userSlice;
