import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Switch,
} from "react-native";
import { Link, router, useRouter } from "expo-router";
import { useState } from "react";

interface Props {
  gameName: string;
}

export default function GameSetup() {
  const [gameName, setGameName] = useState("New Game 1");
  const [numTeams, setNumTeams] = useState(4);
  const [teamNames, setTeamNames] = useState<[string, string, string, string]>([
    "",
    "",
    "",
    "",
  ]);
  const [numRounds, setNumRounds] = useState(0);
  const [goalScore, setGoalScore] = useState(0);
  const [isLimitlessRounds, setIsLimitlessRounds] = useState(false);

  const router = useRouter();

  const updateTeamName = (index: number, text: string) => {
    const updatedTeamNames = [...teamNames] as [string, string, string, string];
    updatedTeamNames[index] = text;
    setTeamNames(updatedTeamNames);
  };

  const handleStartGame = () => {
    if (teamNames.some((name) => name.trim() === "")) {
      Alert.alert("Error", "Please enter a valid name");
      return;
    }
    if (numRounds < 1 && !isLimitlessRounds) {
      Alert.alert("Error", "Please enter a valid number of rounds !");
      return;
    }
    if (goalScore.trim() !== "" && isNaN(parseInt(goalScore, 10))) {
      Alert.alert("Error", "Please enter a valid goal score !");
      return;
    }

    const gameData = {
      gameName,
      numTeams: 4,
      teamNames,
      numRounds: isLimitlessRounds ? 0 : numRounds,
      goalScore: goalScore.trim() === "" ? undefined : parseInt(goalScore, 10),
    };

    router.push({
      pathname: "/scoreboard",
      params: {
        ...gameData,
        teamNames: JSON.stringify(gameData.teamNames),
      },
    });
    console.log(gameData);
  };

  return (
    <View className="h-full bg-slate-600">
      <View className="m-4">
        <TextInput
          style={{ outline: "none" }}
          className="text-2xl font-bold mb-4 text-center text-white"
          placeholder="Enter Game Name"
          value={gameName}
          onChangeText={setGameName}
        />

        <View className="flex flex-row justify-around m-4 flex-wrap">
          <View className="w-44 mr-2 mt-2">
            <Text className="text-lg font-bold mb-2 text-center text-white">
              Player 1
            </Text>
            <TextInput
              style={{ outline: "none" }}
              placeholder="Enter a name..."
              className="border border-white rounded px-3 py-4 text-xl placeholder:text-center text-white active:cursor-none"
              value={teamNames[0]}
              onChangeText={(text) => updateTeamName(0, text)}
            />
          </View>
          <View className="w-44 mr-2 mt-2">
            <Text className="text-lg font-bold mb-2 text-center text-white">
              Player 2
            </Text>
            <TextInput
              style={{ outline: "none" }}
              placeholder="Enter a name..."
              className="border border-white rounded px-3 py-4 text-xl placeholder:text-center text-white"
              value={teamNames[1]}
              onChangeText={(text) => updateTeamName(1, text)}
            />
          </View>
          <View className="w-44 mr-2 mt-2">
            <Text className="text-lg font-bold mb-2 text-center text-white">
              Player 3
            </Text>
            <TextInput
              style={{ outline: "none" }}
              placeholder="Enter a name..."
              className="border border-white rounded px-3 py-4 text-xl placeholder:text-center text-white"
              value={teamNames[2]}
              onChangeText={(text) => updateTeamName(2, text)}
            />
          </View>
          <View className="w-44 mr-2 mt-2">
            <Text className="text-lg font-bold mb-2 text-center text-white">
              Player 4
            </Text>
            <TextInput
              style={{ outline: "none" }}
              placeholder="Enter a name..."
              className="border border-white rounded px-3 py-4 text-xl placeholder:text-center text-white"
              value={teamNames[3]}
              onChangeText={(text) => updateTeamName(3, text)}
            />
          </View>
        </View>

        <View className="flex-row items-center mb-4">
          <Switch
            value={isLimitlessRounds}
            onValueChange={setIsLimitlessRounds}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isLimitlessRounds ? "#a8caed" : "#d4d4d4"}
            ios_backgroundColor="#3e3e3e"
          />
          <Text className="ml-2 text-lg text-white">Limitless Round</Text>
        </View>

        {!isLimitlessRounds && (
          <View className="mb-4">
            <Text className="text-lg text-white">Number of Rounds :</Text>
            <TextInput
              style={{ outline: "none" }}
              className="text-lg border-b border-white rounded px-3 py-2 w-16 text-center text-white"
              value={numRounds.toString()}
              onChangeText={(text) => setNumRounds(parseInt(text, 10) || 0)}
              keyboardType="numeric"
              placeholder="0"
            />
          </View>
        )}

        <View className="mb-4">
          <Text className="text-lg text-white">Goal Score (Optional):</Text>
          <TextInput
            style={{ outline: "none" }}
            className="text-lg border-b border-white rounded px-3 py-2 w-16 text-center text-white"
            value={goalScore}
            onChangeText={setGoalScore}
            keyboardType="numeric"
            placeholder="0"
          />
        </View>
        <View className="flex flex-col items-center justify-center">
          <TouchableOpacity
            className="bg-blue-600 py-2 px-4 rounded"
            onPress={handleStartGame}
            accessibilityHint="Start Game"
          >
            <Text className="text-lg font-bold text-white">Start Game</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Text className="text-2xl font-bold mb-4 text-center">Game Setup</Text> */}
    </View>
  );
}
