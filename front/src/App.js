import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { theme } from "./colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useState, useCallback, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainView from "./screens/MainView";
import OnboardingScreen from "./screens/OnboardingScreen";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "./screens/UserView/RegisterScreen";
import LoginScreen from "./screens/UserView/LoginScreen";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "NanumSquareNeoOTF-Rg": require("./assets/fonts/NanumSquareNeoOTF-Rg.otf"),
    "NanumSquareNeoOTF-Bd": require("./assets/fonts/NanumSquareNeoOTF-Bd.otf"),
    "NanumSquareNeoOTF-Eb": require("./assets/fonts/NanumSquareNeoOTF-Eb.otf"),
    "NanumSquareNeoOTF-Hv": require("./assets/fonts/NanumSquareNeoOTF-Hv.otf"),
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
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.background }}
      onLayout={onLayoutRootView}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: theme.background },
            animation: "fade",
          }}
        >
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={MainView} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
