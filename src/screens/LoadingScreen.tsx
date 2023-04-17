import { StyleSheet } from "react-native";
import React from "react";
import { Text } from "../components/Themed";

export default function LoadingScreen() {
  return (
    <Text style={styles.title}>Loading...</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
