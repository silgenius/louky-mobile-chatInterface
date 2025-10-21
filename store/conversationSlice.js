import { createSlice } from '@reduxjs/toolkit';

import { fetchMessagesByconversationId, sendMessage } from './messagesSlice';

const initialState = {
  byId: {
    conversationId: { // Should update dynamically
      id: 'conversationId',
      name: '',
      type: 'public',
      createdBy: 'user_anon1',
      autoDeleteAfter: {},
      openGroupAfter: {},
      description: '',
      isActive: true,
      messageIds: [], // update upon fetch
      isMessageTagged: false,
      taggedMessage: {},
    },
  },
  allIds: [],
  activeConversation: null,
  status: 'idle',
  error: null,
};
const conversationsSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {
    createTagMessage: (state, action) => {
      const { taggedMessage } = action.payload;
      const { conversationId } = taggedMessage;
      state.byId[conversationId].isMessageTagged = true;
      state.byId[conversationId].taggedMessage = taggedMessage;
    },
    removeTagMessage: (state, action) => {
      const { conversationId } = action.payload;
      state.byId[conversationId].isMessageTagged = false;
      state.byId[conversationId].taggedMessage = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessagesByconversationId.fulfilled, (state, action) => {
        const { allIds, conversationId } = action.payload;
        state.byId[conversationId].messageIds.push(...allIds);
      })
      .addCase(sendMessage.pending, (state, action) => {
        const { id, conversationId } = action.meta.arg;
        state.byId[conversationId].messageIds.unshift(id);
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        const { conversationId, id, tempId } = action.payload;

        const idx = state.byId[conversationId].messageIds.indexOf(tempId);
        if (idx !== -1) state.byId[conversationId].messageIds[idx] = id;
      });
  },
});

export const { createConversation, createTagMessage, removeTagMessage } =
  conversationsSlice.actions;
export default conversationsSlice;
