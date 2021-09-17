import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../contexts/AuthProvider';

const LoginScreen = ({ navigation }) => {
  const { setCurrentUser } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Signup');
        }}
      >
        <Text style={{ marginTop: 30 }}>Go to Signup screen</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          setCurrentUser(true);
        }}
      >
        <Text style={{ marginTop: 30 }}>Login</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
