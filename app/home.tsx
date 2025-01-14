import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View className="h-full w-full">
      <View className="flex items-center justify-center mt-8">
        <Text className="font-medium text-3xl text-white py-2 px-4 rounded-lg bg-blue-500">
          Scoreboard App
        </Text>
      </View>
      <View className="flex flex-col items-center mt-5">
        <Link href="/game-setup" className="my-2">
          <TouchableOpacity className="bg-blue-600 rounded-lg w-52">
            <Text className="text-xl text-white font-medium text-center py-2">
              Create New Game
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/game-history" className="my-2">
          <TouchableOpacity className="bg-lime-600 rounded-lg w-52">
            <Text className="text-xl text-white font-medium py-2 text-center">
              Game History
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/game-settings" className="my-2">
          <TouchableOpacity className="bg-red-500 rounded-lg w-52">
            <Text className="text-xl text-white font-medium py-2 text-center">
              Settings
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/game-about" className="my-2">
          <TouchableOpacity className="bg-slate-400 rounded-lg w-52">
            <Text className="text-xl text-white font-medium py-2 text-center">
              About
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
