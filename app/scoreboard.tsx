import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Modal,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RoundHistoryTable from "@/components/RoundHistoryTable";
import useGameStore from "./_stores/gameStore";

export default function Scoreboard() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const teamNames = useGameStore((state) => state.teamNames);
  const numRounds = useGameStore((state) => state.numRounds);
  const goalScore = useGameStore((state) => state.goalScore);
  const addRoundHistory = useGameStore((state) => state.addRoundHistory);
  const setScores = useGameStore((state) => state.setScores);
  const setRoundScores = useGameStore((state) => state.setRoundScores);
  const setRoundHistory = useGameStore((state) => state.setRoundHistory);
  const setModalVisibleInStore = useGameStore((state) => state.setModalVisible);
  const scoresInStore = useGameStore((state) => state.scores);
  const roundHistoryInStore = useGameStore((state) => state.roundHistory);
  const roundScores = useGameStore((state) => state.roundScores);
  const roundHistory = useGameStore((state) => state.roundHistory);
  
  // const scores = useGameStore((state) => state.scores);
  // Modal state for submitting score after current round end
  const [modalVisible, setModalVisible] = useState(false);


  // const [roundHistory, setRoundHistory] = useState<
  //   {
  //     round: number;
  //     scores: [number, number, number, number];
  //     submittedScores: [number, number, number, number];
  //   }[]
  // >([]);

  const handleModal = () => {
    // was handleEndRounds
    setModalVisible(true);
  };

  const handleSubmitRound = () => {
    // was handleSubmitScore
    const updatedScores = scoresInStore.map((score, index) => {
      return score + roundScores[index];
    });
    setScores(updatedScores);

    // Update roundHistory
    const currentRound = roundHistoryInStore.length + 1;
    const roundData = {
      round: currentRound,
      scores: updatedScores,
      submittedScores: [...roundScores] as [number, number, number, number],
    };
    addRoundHistory(roundData);

    // Reset the round scores
    setRoundScores(Array(4).fill(0));

    // Close the modal
    setModalVisibleInStore(false);

    // const updatedScores = scores.map(
    //   (score, index) => score + roundScores[index]
    // );
    // setScores(updatedScores);

    // setRoundHistory([
    //   ...roundHistory,
    //   {
    //     round: roundHistory.length + 1,
    //     scores: [...updatedScores] as [number, number, number, number],
    //     submittedScores: [...roundScores] as [number, number, number, number],
    //   },
    // ]);
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
      );
    }
  };

  return (
    <View className="h-full bg-slate-600">
      <View className="flex flex-row flex-wrap sm:gap-8 gap-4 items-center justify-center m-2 mt-10 p-5 sm:m-4 sm:p-10">
        <Text>{teamNames.join(", ")}</Text>
        <Text>{numRounds}</Text>
        <Text>{goalScore}</Text>
        <Text>{roundHistory.length}</Text>

        {/* {teamNames.map((name, index) => (
          <View
            key={index}
            className="w-44 border border-gray-400 p-4 flex-col items-center justify-center"
          >
            <Text className="text-2xl font-semibold text-white">{name}</Text>
            <View className="border border-white mt-2 w-24 h-14 flex items-center justify-center text-center text-white">
              <Text className="text-3xl font-bold text-white">
                {scores[index]}
              </Text>
            </View>
          </View>
        ))} */}
      </View>
      <View className="mt-2 p-4 sm:mx-10 mx-5 flex-row items-center justify-around">
        <TouchableOpacity
          onPress={handleModal}
          className="bg-black w-40 h-24 rounded flex justify-center"
        >
          <Text className="text-white text-lg font-semibold text-center ">
            End Round
          </Text>
        </TouchableOpacity>

        {/* Modal view for submitting score */}
        <Modal visible={modalVisible} animationType="slide">
          <View>
            <Text className="mb-4 mt-10 text-center text-2xl font-semibold underline">
              Enter Round Scores
            </Text>
            <View className="flex-row items-center justify-center flex-wrap gap-5 sm:gap-8 p-5 sm:p-10">
              {teamNames.map((name, index) => (
                <View
                  key={index}
                  className="w-44 border border-gray-400 p-4 flex-col items-center justify-center"
                >
                  <Text className="text-2xl font-semibold">{name}</Text>
                  <View className="w-20 h-10 border mt-2">
                    <TextInput
                      className="text-2xl font-bold px-1 py-1 text-center placeholder:text-red-200"
                      placeholder="..."
                      value={roundScores[index].toString()}
                      onChangeText={(text) =>
                        handleRoundScoreChange(index, text)
                      }
                      maxLength={4}
                      keyboardType="numeric"
                    />
                  </View>
                </View>
              ))}
            </View>
            <View className="flex flex-row items-center justify-center gap-4 mt-5">
              <TouchableOpacity
                className="w-1/3 sm:w-1/4"
                onPress={handleSubmitRound}
              >
                <Text className="bg-blue-500 text-white px-4 py-2 rounded text-center text-lg">
                  Submit Score
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="w-1/4"
                onPress={() => setModalVisible(false)}
              >
                <Text className="bg-red-500 text-white px-4 py-2 rounded text-center text-lg">
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          onPress={handleFinishGame}
          className=" bg-red-400 w-40 h-24 rounded flext justify-center"
        >
          <Text className="text-xl font-semibold text-center text-white">
            Finish Game
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="font-bold text-2xl text-center border-b-8 border-slate-400 border-spacing-5 px-10 text-white">
        Round History
      </Text>

      <ScrollView
        className="p-4 mx-6 sm:mx-10 mb-2"
        showsVerticalScrollIndicator={false}
      >
        <RoundHistoryTable roundHistory={roundHistory} teamNames={teamNames} />
      </ScrollView>
    </View>
  );
}
