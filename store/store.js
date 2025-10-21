import { configureStore } from '@reduxjs/toolkit';

import messagesSlice from './messagesSlice';
import userSlice from './userSlice';
import conversationsSlice from './conversationSlice';
import appConfigSlice from './appConfigSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    messages: messagesSlice.reducer,
    conversations: conversationsSlice.reducer,
    app: appConfigSlice,
  },
});
// store.subscribe(() => console.log(store.getState())); // To Remove

export default store;
