import { StyleSheet, Text, View } from "react-native";

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
  const styles = StyleSheet.create({
    container: {
      marginTop: 4,
      marginBottom: 5,
      width: "auto",
    },
    headerRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      width: "100%",
    },
    headerText: {
      color: "white",
      marginRight: 0,
    },
    teamNameView: {
      marginRight: 2,
    },
    teamNameText: {
      textAlign: "center",
      color: "white",
    },
    roundRow: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
      marginTop: 2,
      gap: 0,
    },
    roundText: {
      marginBottom: 2,
      borderWidth: 1,
      borderColor: "white",
      padding: 4,
      color: "white",
    },
    scoreView: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 2,
      width: 34,
    },
    scoreText: {
      color: "white",
      textAlign: "center",
    },
    submittedScoreText: {
      color: "white",
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container} className="pb-5">
      <View style={styles.headerRow} className="mb-4">
        <Text style={styles.headerText}>Round</Text>
        {teamNames.map((name, index) => (
          <View key={index} style={styles.teamNameView}>
            <Text style={styles.teamNameText}>{name}</Text>
          </View>
        ))}
      </View>
      {roundHistory.map((roundData) => (
        <View key={roundData.round} style={styles.roundRow}>
          <Text style={styles.roundText}>#{roundData.round}</Text>
          {teamNames.map((name, index) => (
            <View key={index} style={styles.scoreView}>
              {/* <Text key={index}>{name}</Text> */}
              <Text style={styles.scoreText}>{roundData.scores[index]}</Text>
              <Text style={styles.submittedScoreText}>
                {roundData.submittedScores[index] <= 0
                  ? `-${roundData.submittedScores[index]}`
                  : `(${roundData.submittedScores[index]})`}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default RoundHistoryTable;
