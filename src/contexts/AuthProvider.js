import React from 'react';
import { Text, View } from 'react-native';

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const value = {
    currentUser,
    setCurrentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text>Processing Auth State...</Text>
        </View>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
