import React, { useRef } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import AnimatedMessage from './AnimatedMessage';
import useSocketListeners from '../hooks/useSocketListener';
import messageEvents from '../socket/events/messageEvents';

export default function DisplayUserMessages({ conversationId }) {
  const flatListRef = useRef(null);
  const dispatch = useDispatch()
  const messages = useSelector((state) => state.messages[conversationId]);
  const userId = useSelector((state) => state.user.id);
  // useSocketListeners(messageEvents(dispatch));

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
