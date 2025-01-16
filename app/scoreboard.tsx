import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Modal, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import RoundHistoryTable from "@/components/RoundHistoryTable";


export default function Scoreboard() {
  const router = useRouter()
  const params = useLocalSearchParams();
  const teamNames = JSON.parse(params.teamNames);
  const numRounds = parseInt(params.numRounds, 10);
  const goalScore = parseInt(params.goalScore, 10);
  const [modalVisible, setModalVisible] = useState(false);
  const [scores, setScores] = useState(Array(4).fill(0));
  const [roundScores, setRoundScores] = useState(Array(4).fill(0));

  const [roundHistory, setRoundHistory] = useState<
    { round: number; scores: [number, number, number, number]; submittedScores: [number, number, number, number] }[]
  >([]);


  const handleEndRounds = () => {
    setModalVisible(true);
  };

  const handleInputScore = () => {
    const updatedScores = scores.map(
      (score, index) => score + roundScores[index]
    );
    setScores(updatedScores);

    // Reset the round scores
    setRoundScores(Array(4).fill(0));

    // Close the modal
    setModalVisible(false);
  };

  const handleRoundScoreChange = (index: number, text: string) => {
    const newRoundScores = [...roundScores];
    newRoundScores[index] = parseInt(text, 10) || 0;
    setRoundScores(newRoundScores);
  };

  const handleFinishGame = () => {
  if (Platform.OS === "web") {
    if (window.confirm("Are you sure you want to finish the game?")) {
      router.replace("/");
    } 
  } else {
    Alert.alert(
      "Finishing Game",
      "Are you sure you want to finish the game ?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            router.replace("/");
          },
        },
      ]
    )
  }
  };

  return (
    <View className="h-full">
      <View className="flex flex-row flex-wrap gap-8 items-center justify-center m-4 p-10">
        {teamNames.map((name, index) => (
          <View
            key={index}
            className="w-44 border border-gray-400 p-4 flex-col items-center justify-center"
          >
            <Text className="text-2xl font-semibold">{name}</Text>
            <View className="border mt-2 w-24 h-14 flex items-center justify-center text-center">
              <Text className="text-3xl font-bold">{scores[index]}</Text>
            </View>
          </View>
        ))}
      </View>
      <View className="mt-2 p-4 mx-10 flex-row items-center justify-around">
        <TouchableOpacity
          onPress={handleEndRounds}
          className="bg-black w-40 h-24 rounded flex justify-center"
        >
          <Text className="text-white text-lg font-semibold text-center">End Round</Text>
        </TouchableOpacity>

        {/* Modal view for submitting score */}
        <Modal visible={modalVisible} animationType="slide">
          <View>
            <Text className="mb-4 mt-10 text-center text-2xl font-semibold underline">
              Enter Round Scores
            </Text>
            <View className="flex-row items-center justify-center flex-wrap gap-8 p-10">
              {teamNames.map((name, index) => (
                <View
                  key={index}
                  className="w-44 border border-gray-400 p-4 flex-col items-center justify-center"
                >
                  <Text className="text-2xl font-semibold">{name}</Text>
                  <View className="w-1/2 h-10 border mt-2">
                    <TextInput
                      className="text-2xl font-bold px-1 py-1 text-center placeholder:text-red-200"
                      placeholder="..."
                      value={roundScores[index].toString()}
                      onChangeText={(text) =>
                        handleRoundScoreChange(index, text)
                      }
                      maxLength={4}
                    />
                  </View>
                </View>
              ))}
            </View>
            <View className="flex flex-row items-center justify-center gap-4">
              
            <TouchableOpacity className="w-1/4" onPress={handleInputScore}>
              <Text className="bg-blue-500 text-white px-4 py-2 rounded text-center text-lg">
                Submit Score
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-1/4"
              onPress={() => setModalVisible(false)}
            >
              <Text className="bg-red-500 text-white px-4 py-2 rounded text-center text-lg">Cancel</Text>
            </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={handleFinishGame} className=" bg-red-400 w-40 h-24 rounded flext justify-center"> 
          <Text className="text-xl font-semibold text-center text-white">Finish Game</Text>
        </TouchableOpacity>
      </View>

      <View className="p-4 mx-10">
      <RoundHistoryTable roundHistory={roundHistory} teamNames={teamNames} />
      </View>
    </View>
  );
}
