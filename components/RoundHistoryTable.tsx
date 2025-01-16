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
      <Text className="font-bold mb-4 text-lg border-b border-spacing-5">
        Round History
      </Text>
      <View className="flex flex-row items-center justify-around gap-5">
        <Text>Round</Text>
        {teamNames.map((name, index) => (
          <View key={index} className="mx-2 my-2">
            <Text key={index} className="mt-2">
              {name}
            </Text>
          </View>
        ))}
      </View>

      {roundHistory.map((roundData) => (
        <View
          key={roundData.round}
          className="flex flex-row justify-between items-center gap-5"
        >
          <Text className="mr-2 mb-2 border p-2">#{roundData.round}</Text>
          {teamNames.map((name, index) => (
            <View
              key={index}
              className="flex flex-col items-center justify-center mr-5"
            >
              <Text key={index}>{name}</Text>
              <Text>{roundData.scores[index]}</Text>
              <Text>
                ({roundData.submittedScores[index] > 0 ? "+" : ""}
                {roundData.submittedScores[index]})
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default RoundHistoryTable;
