import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, statusBarStyle: "dark" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="game-setup" options={{ title: "Setup a New Game" }} />
      <Stack.Screen name="history" options={{ title: "Game History" }} />
      <Stack.Screen name="scoreboard" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{ title: "Settings" }} />
      <Stack.Screen name="about" options={{ headerShown: false }} />
      <Stack.Screen name="gameSetupExample" options={{ headerShown: false }} />
    </Stack>
  );
}
