import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { StatusBar } from 'expo-status-bar';

import { useFonts } from 'expo-font';
import { Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useCallback } from 'react';
import { Text, View } from 'react-native';
import styles from './src/pages/Landing/styles';
import AppStack from './src/routes/AppStack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  const onLayoutRootView = useCallback(async () => {    
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {    
    return null;
  }

  return (    
    <NavigationContainer>
      <GestureHandlerRootView onLayout={onLayoutRootView}>
        <AppStack /> 
        <StatusBar style='light' />     
      </GestureHandlerRootView> 
    </NavigationContainer>
  );
  
}