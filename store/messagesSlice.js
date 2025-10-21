import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import normalizeData from '../utils/normalizeData';

const initialState = {
  byId: {},
  allIds: [],
  error: null,
  status: 'idle', // 'idle' | 'loading' | 'success' | 'error'
};

const serverUrl = `http://localhost:5000/api/messages`;
const messageAPI = {
  fetchByConversationId: async (conversationId) =>
    fetch(`${serverUrl}/${conversationId}`),
  sendMessage: async (message) =>
    fetch(`${serverUrl}/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    }),
};

export const fetchMessagesByconversationId = createAsyncThunk(
  'messages/fetchByconversationIdStatus',
  async (conversationId, thunkAPI) => {
    const response = await messageAPI.fetchByConversationId(conversationId);
    const data = await response.json();
    return { conversationId, ...normalizeData(data.data) };
  }
);

export const sendMessage = createAsyncThunk(
  'messages/createMessage',
  async (message, { dispatch }) => {
    const response = await messageAPI.sendMessage(message);
    const data = await response.json();
    return data.data;
  }
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    createMessage: (state, action) => {
      const { message } = action.payload;
      state.byId[message.id] = message;
      state.allIds = [message.id, ...state.allIds];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessagesByconversationId.pending, (state) => {
        state.error = null;
        state.status = 'loading';
      })
      .addCase(fetchMessagesByconversationId.fulfilled, (state, action) => {
        const { allIds, data } = action.payload;
        state.byId = { ...state.byId, ...data };
        state.allIds.push(...allIds);
        state.status = 'success';
      })
      .addCase(fetchMessagesByconversationId.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      })
      .addCase(sendMessage.pending, (state) => {
        state.error = null;
        state.status = 'loading';
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        const { tempId, ...message } = action.payload;

        delete state.byId[tempId]; // remove existing message
        state.byId[message.id] = message;

        const idx = state.allIds.indexOf(tempId);
        if (idx !== -1) state.allIds[idx] = message.id;
        state.status = 'success';
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = 'error';
        const tempId = action.meta.arg.id;
        state.byId[tempId].status = 'failed';

        const { stack, ...error } = action.error;
        error.type = action.type;
        state.error = error;
      });
  },
});

export const { createMessage } = messagesSlice.actions;

export default messagesSlice;
