import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Scoreboard() {
  const route = useRouter();
  const { gameName, numTeams, teamNames } = useLocalSearchParams();

  const [scores, setScores] = useState(Array(numTeams).fill(0));
  const [roundNumber, setRoundNumber] = useState(1);

  return (
    <View>
      <Text>
        {gameName} - Round {roundNumber}
      </Text>
      <View>
        {teamNames.map((teamName, index) => (
          <View key={index} className="">
            <Text>{teamName}</Text>
            <Text>{scores[index]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
