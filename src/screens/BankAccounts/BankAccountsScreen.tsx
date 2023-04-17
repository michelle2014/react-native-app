import { StyleSheet } from "react-native";

import EditScreenInfo from '../../components/CashInfo';
import { Text, View } from "../../components/Themed";
import React from "react";

export default function BankAccountsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bank Accounts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
