import { createSlice } from '@reduxjs/toolkit';

const conversationsSlice = createSlice({
  name: 'conversations',
  initialState: {
    conversations: [],
  },
  reducers: {
    createConversation: (state, action) => {
      const { conversation } = action?.payload;
      state.conversations = [conversation, ...state.conversations];
    },
  },
});

export const { createConversation } = conversationsSlice.actions;
export default conversationsSlice;
