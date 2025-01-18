import { Link, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  const router = useRouter();
  return (
    <View className="h-full w-full bg-slate-600">
      <View className="m-4">
        <Text className="font-medium text-slate-300 text-[40px] p-2">
          Scoreboard App
        </Text>
      </View>
      <View className="flex flex-col items-center mt-5">
        <TouchableOpacity
          onPress={() => router.push("/game-setup")}
          className="bg-blue-600 rounded-lg py-2 w-[320px] h-20 px-2 m-2"
        >
          <Text className="text-[30px] text-white font-medium absolute bottom-2 left-2">
            Create New Game
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-lime-600 rounded-lg py-2 w-[320px] h-20 px-2 m-2"
          onPress={() => router.push("/history")}
        >
          <Text className="text-[30px] text-white font-medium absolute bottom-2 left-2">
            Game History
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-red-500 rounded-lg py-2 w-[320px] h-20 px-2 m-2"
          onPress={() => router.push("/settings")}
        >
          <Text className="text-[30px] text-white font-medium absolute bottom-2 left-2">
            Settings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-slate-400 rounded-lg py-2 w-[320px] h-20 px-2 m-2"
          onPress={() => router.push("/about")}
        >
          <Text className="text-[30px] text-white font-medium absolute bottom-2 left-2">
            About
          </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-40 flex items-center justify-center">
        <Text className="text-2xl mb-4 text-white">Scoreboard App v1.0</Text>
        <Text className="text-2xl text-white">
          Made with 💪 by{" "}
          <Link href="https://www.x.com/picupiee">picupiee</Link>
        </Text>
      </View>
    </View>
  );
}
