import { createSlice } from '@reduxjs/toolkit';

const conversationsSlice = createSlice({
  name: 'conversations',
  initialState: {
    conversationId: {
      isTyping: {
        value: false,
        data: {},
      },
      taggedMessage: {},
      draft: {
        value: false,
        message: {},
      },
      lastMessage: {
        user: '...',
        message: '...',
      },
    },
  },
  reducers: {
    createConversation: (state, action) => {
      const { conversation } = action?.payload;
      state.conversations = [conversation, ...state.conversations];
    },
    createTagMessage: (state, action) => {
      const { taggedMessage } = action.payload;
      const { conversationId } = taggedMessage;
      state[conversationId].isMessageTagged = true;
      state[conversationId].taggedMessage = taggedMessage;
    },
    removeTagMessage: (state, action) => {
      const { conversationId } = action.payload;
      state[conversationId].isMessageTagged = false;
      state[conversationId].taggedMessage = {};
    },
  },
});

export const { createConversation, createTagMessage, removeTagMessage } =
  conversationsSlice.actions;
export default conversationsSlice;
