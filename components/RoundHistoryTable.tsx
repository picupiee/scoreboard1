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
    <View className="mt-4 mb-5 w-auto ">
      {/* <Text className="font-bold mb-4 text-lg border-b border-spacing-5">
        Round History
      </Text> */}
      <View className="flex flex-col items-center justify-center">
        <View className="flex flex-row items-center justify-around w-full">
          <Text className="mr-0 text-white">Round</Text>
          {teamNames.map((name, index) => (
            <View key={index} className="mr-2">
              <Text key={index} className="text-center text-white">
                {name}
              </Text>
            </View>
          ))}
        </View>

        {roundHistory.map((roundData) => (
          <View
            key={roundData.round}
            className="flex flex-row justify-around items-start w-full mt-2"
          >
            <Text className="mb-2 border border-white p-2 text-white">
              #{roundData.round}
            </Text>
            {teamNames.map((name, index) => (
              <View
                key={index}
                className="flex flex-col items-center justify-center mr-2"
              >
                {/* <Text key={index}>{name}</Text> */}
                <Text className="text-white">{roundData.scores[index]}</Text>
                <Text className="text-white">
                  ({roundData.submittedScores[index] > 0 ? "+" : ""}
                  {roundData.submittedScores[index]})
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default RoundHistoryTable;
