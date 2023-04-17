// import * as WebBrowser from "expo-web-browser";
import { StyleSheet, ScrollView } from "react-native";
import { Text, View } from "./Themed";
import React from "react";
import { Avatar } from 'react-native-elements';

export default function CashInfo() {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={(styles.listContainer, {flex: 1})}>
      <ScrollView>
        <Text
          style={(styles.titleText, {
            marginTop: 15,
            marginBottom: 5,
            marginLeft: 15,
            fontWeight: "bold",
            fontSize: 17,
            lineHeight: 24,
            textAlign: "left",})}
        >
          Cash
        </Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View style={{marginTop: 8, flex: 1, flexDirection: 'row'}}>
          <Avatar
              containerStyle={{marginLeft: 12, marginTop: 4, marginRight: 10}}
              icon={{name: 'user', type: 'font-awesome'}}
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
            />
          <View style={(styles.listContainer, {flex: 1})}>
            <Text style={{fontSize: 12, color: "grey"}}>WEALTHFRONT</Text>
            <Text style={{fontSize: 17, marginTop: 3}}>Personal Savings</Text>
          </View>
          <Text style={(styles.titleText, {fontSize: 17, marginRight: 15, marginTop: 15})}>$9,2875</Text>
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View style={{marginTop: 15, flex: 1, flexDirection: 'row'}}>
          <Avatar
              containerStyle={{marginLeft: 12, marginTop: 4, marginRight: 10}}
              icon={{name: 'meetup', color: 'red', type: 'font-awesome'}}
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
            />
          <View style={(styles.listContainer, {flex: 1})}>
            <Text style={{fontSize: 12, color: "grey"}}>BANK OF AMERICA</Text>
            <Text style={{fontSize: 17, marginTop: 3}}>BofA Checkings</Text>
          </View>
          <Text style={(styles.titleText, {fontSize: 17, marginRight: 15, marginTop: 15})}>$12,030</Text>
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
       <View style={{marginTop: 15, flex: 1, flexDirection: 'row'}}>
          <Avatar
              containerStyle={{marginLeft: 12, marginTop: 4, marginRight: 10}}
              icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
            />
          <View style={(styles.listContainer, {flex: 1})}>
            <Text style={{fontSize: 12, color: "grey"}}>ROBINHOOD</Text>
            <Text style={{fontSize: 17, marginTop: 3}}>Robinhood Cash</Text>
          </View>
          <Text style={(styles.titleText, {fontSize: 17, marginRight: 15, marginTop: 15})}>$7,123</Text>
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View style={{marginTop: 15, flex: 1, flexDirection: 'row'}}>
          <Avatar
              containerStyle={{marginLeft: 12, marginTop: 4, marginRight: 10}}
              icon={{name: 'home', color: 'blue', type: 'font-awesome'}}
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
            />
          <View style={(styles.listContainer, {flex: 1})}>
            <Text style={{fontSize: 12, color: "grey"}}>COINBASE PRO</Text>
            <Text style={{fontSize: 17, marginTop: 3}}>Coinbase USD</Text>
          </View>
          <Text style={(styles.titleText, {fontSize: 17, marginRight: 15, marginTop: 15})}>$15,712</Text>
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        </ScrollView>
      </View>
    </View>
  );
}

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     "https://docs.expo.dev/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
//   );
// }

const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
    height: 1,
    width: "900%",
  },
  listContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  titleText: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 24,
    textAlign: "left",
  }
});
