import { createSlice } from '@reduxjs/toolkit';

import messages from '../utils/messages';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    conversationId: messages,
  },
  reducers: {
    createMessage: (state, action) => {
      const { message } = action.payload;
      const { conversationId } = message;
      state[conversationId] = [message, ...state[conversationId]];
    },
  },
});

export const {
  createMessage,
} = messagesSlice.actions;

export default messagesSlice;
