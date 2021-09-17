import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Signup Screen</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Login');
        }}
      >
        <Text style={{ marginTop: 30 }}>Go to Login screen</Text>
      </Pressable>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
