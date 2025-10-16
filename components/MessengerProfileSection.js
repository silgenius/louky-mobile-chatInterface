import React from 'react';
import { Text, Image, StyleSheet, Pressable, View } from 'react-native';

export default function MessengerProfileSection() {
  return (
    <View style={styles.header}>
      <Pressable style={styles.profileSection}>
        <Image
          style={styles.profileImg}
          source={{
            uri: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Brian',
          }}
        />
        <Text>John Doe</Text>
      </Pressable>

      
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    gap: 8,
    borderRadius: 5,
    borderStyle: 'none',
  },
  profileImg: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#FFFFFF',
  },
});
