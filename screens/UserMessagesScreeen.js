import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useSelector } from 'react-redux';

import DisplayUserMessages from '../components/DisplayUserMessages';
import AnimatedMessageInput from '../components/AnimatedMessageInput';
import MessengerProfileSection from '../components/MessengerProfileSection';

export default function UserMessagesScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
        <View>
          <MessengerProfileSection />
        </View>
        <View style={{ flex: 1 }}>
          <DisplayUserMessages /> {/*id={id} message Id to be passed*/}
        </View>
        <AnimatedMessageInput /> {/*id={id} conversation Id to be passed*/}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
