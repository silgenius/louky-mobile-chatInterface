import React, { useRef, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import AnimatedMessage from './AnimatedMessage';
import useSocketListeners from '../hooks/useSocketListener';
import messageEvents from '../socket/events/messageEvents';
import { fetchMessagesByconversationId } from '../store/messagesSlice';
import { selectMessagesForConversations } from '../store/selectors';

export default function DisplayUserMessages({ conversationId }) {
  const flatListRef = useRef(null);
  const dispatch = useDispatch();
  const messages = useSelector((state) =>
    selectMessagesForConversations(state, conversationId)
  );
  const userId = useSelector((state) => state.user.id);

  // useSocketListeners(messageEvents(dispatch));

  useEffect(() => {
    dispatch(fetchMessagesByconversationId(conversationId)); // fetch messages only if messsages is null
  }, [dispatch, conversationId]);

  const scrollToItem = (id) => {
    const index = messages.findIndex(
      (message) => message.id.toString() === id.toString()
    );
    if (index !== -1)
      flatListRef.current?.scrollToIndex({ index, viewPosition: 0.5 });
  };

  return (
    <FlatList
      ref={flatListRef}
      data={messages}
      keyExtractor={(item) => item.id.toString()}
      inverted
      renderItem={({ item }) => {
        return (
          <AnimatedMessage
            message={item}
            isOwnMessage={item.sender_id === userId}
            onPress={scrollToItem}
          />
        );
      }}
    />
  );
}
