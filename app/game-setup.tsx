import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Link, router, useRouter } from "expo-router";
import { useState } from "react";

interface Props {
  gameName: string;
}

export default function GameSetup() {
  const [gameName, setGameName] = useState("");
  const [numTeams, setNumTeams] = useState(4);
  const [teamNames, setTeamNames] = useState<[string, string, string, string]>([
    "",
    "",
    "",
    "",
  ]);
  const [numRounds, setNumRounds] = useState(0);
  const [goalScore, setGoalScore] = useState("");
  const [isLimitlessRounds, setIsLimitlessRounds] = useState(false);

  const router = useRouter();

  const handleStartGame = () => {
    if (teamNames.some((name) => name.trim() === "")) {
      Alert.alert("Error", "Please enter a valid name");
      return;
    }

    const gameData = {
      gameName,
      numTeams: 4,
      teamNames,
      numRounds: isLimitlessRounds ? 0 : numRounds,
      goalScore,
    };

    router.push({
      pathname: "/scoreboard",
      params: gameData,
    });
  };

  return (
    <View className="m-4">
      <Text className="text-2xl font-bold mb-4 text-center">Game Setup</Text>

      <View className="flex flex-row justify-around m-4 flex-wrap">
        <View className="w-44 mr-2 mt-2">
          <Text className="text-lg font-bold mb-2 text-center">Player 1</Text>
          <TextInput
            placeholder="Enter a name..."
            className="border border-b-gray-300 rounded px-3 py-4 text-xl placeholder:text-center"
            value={teamNames[0]}
            onChangeText={(text) => {
              const updatedTeamNames = [...teamNames] as [
                string,
                string,
                string,
                string
              ];
              updatedTeamNames[0] = text;
              setTeamNames(updatedTeamNames);
            }}
          />
        </View>
        <View className="w-44 mr-2 mt-2">
          <Text className="text-lg font-bold mb-2 text-center">Player 2</Text>
          <TextInput
            placeholder="Enter a name..."
            className="border border-b-gray-300 rounded px-3 py-4 text-xl placeholder:text-center"
            value={teamNames[1]}
            onChangeText={(text) => {
              const updatedTeamNames = [...teamNames] as [
                string,
                string,
                string,
                string
              ];
              updatedTeamNames[1] = text;
              setTeamNames(updatedTeamNames);
            }}
          />
        </View>
        <View className="w-44 mr-2 mt-2">
          <Text className="text-lg font-bold mb-2 text-center">Player 3</Text>
          <TextInput
            placeholder="Enter a name..."
            className="border border-b-gray-300 rounded px-3 py-4 text-xl placeholder:text-center"
            value={teamNames[2]}
            onChangeText={(text) => {
              const updatedTeamNames = [...teamNames] as [
                string,
                string,
                string,
                string
              ];
              updatedTeamNames[2] = text;
              setTeamNames(updatedTeamNames);
            }}
          />
        </View>
        <View className="w-44 mr-2 mt-2">
          <Text className="text-lg font-bold mb-2 text-center">Player 4</Text>
          <TextInput
            placeholder="Enter a name..."
            className="border border-b-gray-300 rounded px-3 py-4 text-xl placeholder:text-center"
            value={teamNames[3]}
            onChangeText={(text) => {
              const updatedTeamNames = [...teamNames] as [
                string,
                string,
                string,
                string
              ];
              updatedTeamNames[3] = text;
              setTeamNames(updatedTeamNames);
            }}
          />
        </View>
      </View>
    </View>
  );
}
