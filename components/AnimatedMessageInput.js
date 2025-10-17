import React, { useState, useRef, useEffect } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Animated,
  Pressable,
  Text,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import { createMessage } from '../store/messagesSlice';
import { removeTagMessage } from '../store/conversationSlice';

export default function MessageInput({ conversationId }) {
  const [newMessage, setNewMessage] = useState('');
  const scale = useRef(new Animated.Value(1)).current;
  const inputRef = useRef(null);
  const reply = useSelector(
    (state) => state.conversations[conversationId].taggedMessage
  );
  const dispatch = useDispatch();

  const sendMessage = (newMessage) => {
    const message = {
      id: Date.now().toString(),
      conversationId: conversationId,
      message: newMessage,
      sender_id: 'user_anon1',
      replied_to: reply,
      timeStamp: '2025-10-13T14:02:00Z',
    };
    dispatch(createMessage({ message }));
    dispatch(removeTagMessage({conversationId: conversationId }));
    // Create Logic to send message
  };

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.85,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    sendMessage(newMessage);
    setNewMessage('');
  };

  const handleInputFocus = () => {
    inputRef.current?.focus();
  };
  const handleInputBlur = () => {
    inputRef.current?.blur();
  };

  const handleCancelTaggedMessage = () => {
    dispatch(removeTagMessage({ conversationId }));
    if (!newMessage.trim()) handleInputBlur();
    else handleInputFocus();
  };

  useEffect(() => {
    if (reply?.message) handleInputFocus();
  }, [reply]);

  return (
    <View style={styles.newMessageContainer}>
      {reply?.message && (
        <View style={styles.replyContainer}>
          <View style={styles.replyHeader}>
            <Text style={styles.replySender}>
              {'user_anon1' === reply.sender_id ? 'You' : reply.sender_id}
            </Text>
            <Pressable onPress={handleCancelTaggedMessage}>
              <MaterialIcons name="close" size={18} color="#555" />
            </Pressable>
          </View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.replyMessage}>
            {reply.message}
          </Text>
        </View>
      )}

      <View style={styles.inputRow}>
        <TextInput
          ref={inputRef}
          style={styles.textInput}
          onChangeText={(text) => setNewMessage(text)}
          value={newMessage}
          placeholder="Message..."
          multiline
        />
        <Pressable
          onPressIn={handlePressIn}
          onPress={handlePress}
          onPressOut={handlePressOut}
          disabled={!newMessage.trim()}>
          <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
            <MaterialIcons name="send" size={24} color={'green'} />
          </Animated.View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  newMessageContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#F9F9F9',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  replyMessage: {
    color: '#555',
  },
  textInput: {
    flex: 1,
    maxHeight: 100,
    minHeight: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  replyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  replyContainer: {
    backgroundColor: '#e0f7fa',
    padding: 8,
    borderLeftWidth: 4,
    borderLeftColor: 'green',
    borderRadius: 8,
    marginBottom: 6,
  },
  replySender: {
    fontWeight: 'bold',
    color: '#333',
  },
});
