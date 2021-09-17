import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { signup } from '../services/session';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Signup Screen</Text>
      <Pressable
        onPress={async () => {
          await signup('husnulamanads@gmail.com', 'test123#');
        }}
      >
        <Text style={{ marginTop: 30 }}>Signup</Text>
      </Pressable>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
