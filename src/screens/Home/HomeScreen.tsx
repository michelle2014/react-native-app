import { Dimensions, StyleSheet } from "react-native";

import CashInfo from '../../components/CashInfo';
import { Text, View } from "../../components/Themed";
import React from "react";
import { LineChart } from "react-native-chart-kit"

export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.chart}>
          <Text style={styles.number}>$11943</Text>
          <LineChart
            data={{
              labels: ["1D", "1W", "1M", "3M", "1Y", "All"],
              datasets: [
                {
                  data: [8, 7, 7.5, 5.5, 7.6, 7.1, 7.6, 7.2, 7.6, 6.5, 9.5, 11.5, 7.5, 11.5, 8.7, 10, 12, 14, 9.5, 13, 9.2, 12, 9, 12],
                  color: (opacity = 1) => `rgba(226, 106, 0, ${opacity})`,
                }
              ]
            }}
            width={Dimensions.get('window').width} // from react-native
            height={270}
            yAxisLabel=""
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundGradientFromOpacity: 0,
              backgroundGradientToOpacity: 0,
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(251, 140, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "0",
                strokeWidth: "2",
              }
            }}
            bezier
            style={{
              marginVertical: 2,
              marginLeft: 35,
              marginRight: 35,
              borderRadius: 2
            }}
          />
        </View>
        <View style={styles.list}>
          <CashInfo />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    alignItems: "center",
  },
  number: {
    fontSize: 23
  },
  chart: {
    backgroundColor: "#ffffff",
    width: "95%",
    marginTop: "5%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    backgroundColor: "#ffffff",
    width: "95%",
    marginTop: "5%",
    flex: 1,
    alignItems: "center",
  },
});
