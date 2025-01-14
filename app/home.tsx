import { Link, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();
  return (
    <View className="h-full w-full">
      <View className="flex items-center justify-center mt-8">
        <Text className="font-medium text-3xl text-white py-2 px-4 rounded-lg bg-blue-500">
          Scoreboard App
        </Text>
      </View>
      <View className="flex flex-col items-center mt-5">
        <TouchableOpacity
          onPress={() => router.push("/game-setup")}
          className="bg-blue-600 rounded-lg w-52 m-2"
        >
          <Text className="text-xl text-white font-medium text-center py-2">
            Create New Game
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-lime-600 rounded-lg w-52 m-2"
          onPress={() => router.push("/history")}
        >
          <Text className="text-xl text-white font-medium py-2 text-center">
            Game History
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-red-500 rounded-lg w-52 m-2"
          onPress={() => router.push("/settings")}
        >
          <Text className="text-xl text-white font-medium py-2 text-center">
            Settings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-slate-400 rounded-lg w-52 m-2"
          onPress={() => router.push("/about")}
        >
          <Text className="text-xl text-white font-medium py-2 text-center">
            About
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
