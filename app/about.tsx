import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function About() {
  return (
    <View className="w-full">
      <View className="flex items-center justify-center h-full">
        <Text className="font-bold text-xl">ScoreBoard V1</Text>
        <Text className="mt-2 font-medium text-center">
          This app is build by PicuPiee, with help from Gemini AI provided by
          Google via Project IDX
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/_sitemap")}
          className="mt-4"
        >
          <Text className="text-center font-bold text-xl text-white bg-blue-500 p-2 rounded-lg">
            See Sitemap for this App
          </Text>
        </TouchableOpacity>
        <View className="mt-4">
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text className="text-center font-bold text-xl text-white bg-blue-500 p-2 rounded-lg">
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
