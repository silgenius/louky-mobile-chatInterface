import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

import { Button } from 'react-native-paper';

export default function MessageInput({ sendMessage }) {
  const [newMessage, setNewMessage] = useState('');
  return (
    <View style={styles.newMessageContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setNewMessage(text)}
        value={newMessage}
        placeholder="Mesasage..."
        multiline
      />
      <Button
        icon="send"
        mode="contained"
        compact
        disabled={!newMessage.trim()}
        onPress={() => {
          sendMessage(newMessage);
          setNewMessage('');
        }}
        contentStyle={styles.button}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  newMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#F9F9F9',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
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
});
