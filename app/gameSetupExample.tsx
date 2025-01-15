import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function SetupExample() {
  const router = useRouter();
  return (
    <View>
      <Text>Setup is completed</Text>
      <TouchableOpacity
        onPress={() => router.push("/game-setup")}
        className="bg-blue-500 w-2/5"
      >
        <Text className="text-center font-bold">Go Back to Setup Game</Text>
      </TouchableOpacity>
    </View>
  );
}
