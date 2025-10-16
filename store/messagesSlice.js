import { createSlice } from '@reduxjs/toolkit';

import messages from '../utils/messages';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: messages,
    isMessageTagged: false,
    taggedMessage: {},
  },
  reducers: {
    createMessage: (state, action) => {
      const { message } = action.payload;
      state.messages = [message, ...state.messages];
    },
    getMessages: (state, action) => {},
    createTagMessage: (state, action) => {
      state.isMessageTagged = true;
      state.taggedMessage = action.payload;
    },
    removeTagMessage: (state) => {
      state.isMessageTagged = !state.isMessageTagged;
      state.taggedMessage = {};
    },
  },
});

export const {
  createMessage,
  createTagMessage,
  removeTagMessage,
  getMessages,
} = messagesSlice.actions;

export default messagesSlice;
