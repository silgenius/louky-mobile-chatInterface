import React, { useRef } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import AnimatedMessage from './AnimatedMessage';

export default function DisplayUserMessages({ id }) {
  const flatListRef = useRef(null);
  const messages = useSelector((state) => state.messages.messages);

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
            isOwnMessage={item.sender_id === 'user_anon1'}
            onPress={scrollToItem}
          />
        );
      }}
    />
  );
}
