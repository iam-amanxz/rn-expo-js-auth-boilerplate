import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../contexts/AuthProvider';

const HomeScreen = () => {
  const { setCurrentUser } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Pressable
        onPress={() => {
          setCurrentUser(null);
        }}
      >
        <Text style={{ marginTop: 30 }}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
