import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

// Wrap <View> outside and apply margin and stuff to avoid swiping below components.
const MessageTemplate = ({ style, message, isOwnMessage, onPress }) => (
  <View style={styles.messageWrapper}>
    <Animated.View
      style={[
        style,
        isOwnMessage ? styles.rightAlign : styles.leftAlign,
        { flexDirection: 'row' },
      ]}>
      <View
        style={[
          styles.messageContainer,
          isOwnMessage ? styles.ownMessage : styles.receivedMessage,
        ]}>
        {message.replied_to?.message ? (
          <View style={styles.replyContainer}>
            <TouchableOpacity onPress={() => onPress(message?.replied_to?.id)}>
              <Text
                style={styles.replyText}
                numberOfLines={2}
                ellipsizeMode="tail">
                {message?.replied_to?.message}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <Text style={styles.messageText}>{message.message}</Text>
        <View style={styles.statusRow}>
          <Text style={styles.timeStamp}>11:30 pm</Text>
          <Ionicons name="checkmark-circle-sharp" size={12} color="green" />
        </View>
      </View>
    </Animated.View>
  </View>
);

const styles = StyleSheet.create({
  messageWrapper: {
    marginVertical: 4,
    marginHorizontal: 10,
  },
  leftAlign: {
    justifyContent: 'flex-start',
  },
  rightAlign: {
    justifyContent: 'flex-end',
  },
  messageContainer: {
    maxWidth: '75%',
    borderRadius: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  ownMessage: {
    backgroundColor: '#DCF8C6',
    borderTopRightRadius: 1,
  },
  receivedMessage: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 1,
  },
  replyContainer: {
    backgroundColor: '#F1F1F1',
    padding: 6,
    borderRadius: 8,
    marginBottom: 4,
  },
  replyText: {
    fontSize: 12,
    color: '#555',
  },
  messageText: {
    fontSize: 16,
    color: '#222',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 4,
    gap: 4,
  },
  timeStamp: {
    fontSize: 10,
    color: '#999',
    // marginRight: 4,
    alignSelf: 'flex-end',
  },
});

export default MessageTemplate;
