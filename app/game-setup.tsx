import { View, Text, TextInput, Button } from "react-native";
import { Link, useRouter } from "expo-router";
import { useState } from "react";

interface Props {
  gameName: string;
}

export default function GameSetup() {
  const [gameName, setGameName] = useState("");
  const [numTeams, setNumTeams] = useState(2);
  const [teamNames, setTeamNames] = useState("");
  const [numRounds, setNumRounds] = useState("");
  const [goalScore, setGoalScore] = useState("");

  const router = useRouter();

  const handleStartGame = () => {
    router.push("/scoreboard", {
      gameName,
      numTeams,
      teamNames,
      numRounds,
      goalScore,
    });
  };

  return (
    <View>
      <Text>Game Setup</Text>
      <View>
        <Text>Name of Player / Team</Text>
        <TextInput placeholder="Player / Team name ..." />
      </View>
      <Button title="Start Game" />
    </View>
  );
}
