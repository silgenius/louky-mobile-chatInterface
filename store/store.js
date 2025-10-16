import { configureStore } from '@reduxjs/toolkit';

import messagesSlice from './messagesSlice'
import userSlice from './userSlice'
import conversationsSlice from './conversationSlice'

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    messages: messagesSlice.reducer,
    conversations: conversationsSlice.reducer,
  }
});

// store.subscribe(() => console.log(store.getState())) // To Remove

export default store;
