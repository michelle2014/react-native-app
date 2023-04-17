import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import React from 'react';
import LoadingScreen from './src/screens/LoadingScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return (
      <LoadingScreen />
    );
  } else {
    return (
      <SafeAreaProvider>
        <Navigation/>
        <StatusBar style="light" />
      </SafeAreaProvider>
    );
  }
}