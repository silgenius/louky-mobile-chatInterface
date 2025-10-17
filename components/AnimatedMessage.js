import React from 'react';

import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

import { useDispatch } from 'react-redux';

import MessageTemplate from './AnimatedMessageTemplate';
import { createTagMessage } from '../store/conversationSlice';

export default function Message({ message, isOwnMessage, onPress }) {
  const dispatch = useDispatch();
  const offsetX = useSharedValue(0);

  const dispatchTaggedMessage = () => {
    dispatch(
      createTagMessage({
        taggedMessage: {
          id: message.id,
          conversationId: message.conversationId,
          message: message.message,
          sender_id: message.sender_id,
        },
      })
    );
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offsetX.value }],
    };
  });

  const dragGesture = Gesture.Pan()
    .onStart((_e) => {}) // Disables onPress Logic
    .onUpdate((e) => {
      offsetX.value =
        e.translationX >= 0 && e.translationX <= 70
          ? e.translationX
          : offsetX.value;
    })
    .onEnd(() => {
      offsetX.value = 0; // reset offset to initial positon
      scheduleOnRN(dispatchTaggedMessage); // run on RN runtime
    });

  return (
    <Animated.View>
      <GestureDetector gesture={dragGesture}>
        <MessageTemplate
          style={animatedStyles}
          message={message}
          isOwnMessage={isOwnMessage}
          onPress={onPress}
        />
      </GestureDetector>
    </Animated.View>
  );
}
