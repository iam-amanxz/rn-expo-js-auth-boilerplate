import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { signout } from '../services/session';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Pressable
        onPress={async () => {
          await signout();
        }}
      >
        <Text style={{ marginTop: 30 }}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
