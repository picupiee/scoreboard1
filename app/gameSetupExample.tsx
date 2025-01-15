import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function SetupExample() {
  const {
    gameName,
    numTeams,
    teamNames: teamNamesParam,
    numRounds,
    goalScore,
  } = useLocalSearchParams();

  const teamNames = Array.isArray(teamNamesParam)
    ? teamNamesParam
    : typeof teamNamesParam === "string"
    ? JSON.parse(teamNamesParam)
    : [];

  const router = useRouter();
  return (
    <View className="m-4">
      <Text>Setup is completed</Text>
      <View className="mb-4">
        <Text>Game Name: {gameName}</Text>
        <Text>Number of Teams: {numTeams}</Text>
        <Text>Team Names:</Text>
        {teamNames.map((name, index) => (
          <Text key={index}>{name}</Text>
        ))}
        <Text>Number of Rounds: {numRounds}</Text>
        {goalScore !== undefined && <Text>Goal Score: {goalScore}</Text>}
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-blue-500 w-2/5"
      >
        <Text className="text-center font-bold">Go Back to Setup Game</Text>
      </TouchableOpacity>
    </View>
  );
}
