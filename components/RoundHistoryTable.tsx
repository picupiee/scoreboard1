import { Text, View } from "react-native";

interface RoundHistoryTableProps {
  roundHistory: {
    round: number;
    scores: [number, number, number, number];
    submittedScores: [number, number, number, number];
  }[];
  teamNames: string[];
}

const RoundHistoryTable = ({
  roundHistory,
  teamNames,
}: RoundHistoryTableProps) => {
  return (
    <View className="mt-4">
      <Text className="font-bold mb-4">Round History</Text>
      {roundHistory.map((roundData) => (
        <View
          key={roundData.round}
          className="flex flex-row justify-between border-b border-gray-200 pb-2"
        >
          <Text>Round {roundData.round}</Text>
          {teamNames.map((name, index) => (
            <Text key={index}>
              {roundData.scores[index]} (
              {roundData.submittedScores[index] >= 0 ? "+" : ""}
              {roundData.submittedScores[index]})
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

export default RoundHistoryTable;
