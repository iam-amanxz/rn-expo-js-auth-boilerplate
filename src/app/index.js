import React from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { loadAsync } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';

import AuthProvider from '../contexts/AuthProvider';
import Navigation from '../navigation';
import SplashScreen from '../screens/SplashScreen';

function App() {
  const colorScheme = useColorScheme();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const load = async () => {
      try {
        await loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
        console.log('loaded fonts');
      } catch (e) {
        console.warn(e);
      }
    };

    load();

    const timer = setTimeout(async () => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Navigation colorScheme={colorScheme} />
      </AuthProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
