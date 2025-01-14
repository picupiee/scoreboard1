import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="h-full w-full">
      <View className="flex items-center justify-center mt-4">
        <Text className="font-medium text-xl text-white py-2 px-4 rounded-lg bg-blue-500">
          Scoreboard App
        </Text>
      </View>
      <View className="flex flex-col items-center">
        <Link href="/game-setup" className="bg-blue-600 mt-4 p-2 rounded-lg">
          <Text className="text-xl text-white font-medium">Menu 1</Text>
        </Link>

        <Link href="/game-history" className="bg-blue-600 mt-4 p-2 rounded-lg">
          <Text className="text-xl text-white font-medium">Menu 2</Text>
        </Link>

        <Link href="/game-settings" className="bg-blue-600 mt-4 p-2 rounded-lg">
          <Text className="text-xl text-white font-medium">Menu 3</Text>
        </Link>

        <Link href="/game-about" className="bg-blue-600 mt-4 p-2 rounded-lg">
          <Text className="text-xl text-white font-medium">Menu 4</Text>
        </Link>
      </View>
    </View>
  );
}
