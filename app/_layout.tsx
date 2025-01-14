import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="index" />
      <Stack.Screen name="game-setup" />
      <Stack.Screen name="history" />
      <Stack.Screen name="scoreboard" />
      <Stack.Screen name="settings" />
    </Stack>
  );
}
