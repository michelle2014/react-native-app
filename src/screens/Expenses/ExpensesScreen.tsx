import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import React from "react";
import TopSpendingCategories from '../../components/TopSpendingCategories';
import { VictoryPie } from "victory-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ExpensesScreen({navigation}) {
  const graphicData = [
      { y: 25, x: '25%\nRent'},
      { y: 19, x: '     19%\nRestaurants'},
      { y: 30, x: '30%\nDrinks'},
      { y: 10, x: '10% \nUber'},
      { y: 18, x: '18%\nGroceries'},
    ];
  const graphicColor = ['#ff8e9b', '#b0dbfc', '#9ed665', '#ffd796', '#ffc289'];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.chart}>
          <VictoryPie
            data={graphicData}
            colorScale={graphicColor}
            width={280}
            height={280}
            innerRadius={140}
            style={{
            labels: {
            fill: "white", fontSize: 11, padding: 15,
            }, }}
          />
          <View style={{
            alignItems: 'center',
            position: "absolute",
            top: 310, left:"14%",
            flexDirection:'row',
            flexWrap:'wrap'}}>
            <View style={styles.squareRent} />
            <Text style={{fontSize: "12", color: "#376bcb"}}> Rent  </Text>
            <View style={styles.squareRestaurants} />
            <Text style={{fontSize: "12", color: "#376bcb"}}> Restaurants  </Text>
            <View style={styles.squareDrinks} />
            <Text style={{fontSize: "12", color: "#376bcb"}}> Drinks  </Text>
            <View style={styles.squareUber} />
            <Text style={{fontSize: "12", color: "#376bcb"}}> Uber  </Text>
            <View style={styles.squareGroceries} />
            <Text style={{fontSize: "12", color: "#376bcb"}}> Groceries  </Text>
          </View>
        </View>
        <View style={styles.list}>
          <TopSpendingCategories navigation={navigation}/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    alignItems: "center",
  },
  chart: {
    backgroundColor: "#ffffff",
    width: "100%",
    marginTop: "5%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 50,
  },
  squareRent: {
    width: 8,
    height: 8,
    backgroundColor: "#ff8e9b",
  },
  squareRestaurants: {
    width: 8,
    height: 8,
    backgroundColor: "#b0dbfc",
  },
  squareDrinks: {
    width: 8,
    height: 8,
    backgroundColor: "#9ed665",
  },
  squareUber: {
    width: 8,
    height: 8,
    backgroundColor: "#ffd796",
  },
  squareGroceries: {
    width: 8,
    height: 8,
    backgroundColor: "#ffc289",
  },
  outerCircle: {
    borderRadius: 60,
    width: 120,
    height: 120,
    backgroundColor: 'red',
  },
  innerCircle: {
    borderRadius: 45,
    width: 90,
    height: 90,
    margin: 5,
    backgroundColor: 'white'
  },
  list: {
    backgroundColor: "#ffffff",
    width: "95%",
    marginTop: "5%",
    flex: 1,
    alignItems: "center",
  },
  number: {
    fontSize: 23
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
