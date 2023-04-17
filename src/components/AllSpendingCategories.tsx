// import * as WebBrowser from "expo-web-browser";
import { StyleSheet, ScrollView } from "react-native";
import { Text, View } from "./Themed";
import React from "react";
import { Avatar } from 'react-native-elements';
import { SimpleLineIcons } from "@expo/vector-icons";

export default function AllSpendingCategories() {
  return (
    <ScrollView style={{backgroundColor: "#ffffff"}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={(styles.listContainer, {flex: 1})}>
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
            All Spending Categories
          </Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <View style={{alignItems: "center", justifyContent: "center", marginRight: 15, marginTop: 8, flex: 1, flexDirection: 'row'}}>
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
              <Text style={{fontSize: 12, color: "grey"}}>HOME & UTILITIES</Text>
              <Text style={{fontSize: 17, marginTop: 3}}>$3296,98 spent</Text>
            </View>
            <SimpleLineIcons name="arrow-right" size={14} color="grey" marginBottom="20" type="entypo" />
          </View>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <View style={{alignItems: "center", justifyContent: "center", marginRight: 15, marginTop: 15, flex: 1, flexDirection: 'row'}}>
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
              <Text style={{fontSize: 12, color: "grey"}}>TRAVEL</Text>
              <Text style={{fontSize: 17, marginTop: 3}}>$3296,98 spent</Text>
            </View>
            <SimpleLineIcons name="arrow-right" size={14} color="grey" marginBottom="20" type="entypo" />
          </View>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
        <View style={{alignItems: "center", justifyContent: "center", marginRight: 15, marginTop: 15, flex: 1, flexDirection: 'row'}}>
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
              <Text style={{fontSize: 12, color: "grey"}}>RIDE SHARING</Text>
              <Text style={{fontSize: 17, marginTop: 3}}>$3296,98 spent</Text>
            </View>
            <SimpleLineIcons name="arrow-right" size={14} color="grey" marginBottom="20" type="entypo" />
          </View>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <View style={{alignItems: "center", justifyContent: "center", marginRight: 15, marginTop: 15, flex: 1, flexDirection: 'row'}}>
            <Avatar
                containerStyle={{marginLeft: 12, marginTop: 4, marginRight: 10}}
                icon={{name: 'money', color: 'green', type: 'font-awesome'}}
                rounded
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
              />
            <View style={(styles.listContainer, {flex: 1})}>
              <Text style={{fontSize: 12, color: "grey"}}>GROCERIES</Text>
              <Text style={{fontSize: 17, marginTop: 3}}>$3296,98 spent</Text>
            </View>
            <SimpleLineIcons name="arrow-right" size={14} color="grey" marginBottom="20" type="entypo" />
          </View>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <View style={{alignItems: "center", justifyContent: "center", marginRight: 15, marginTop: 15, flex: 1, flexDirection: 'row'}}>
            <Avatar
                containerStyle={{marginLeft: 12, marginTop: 4, marginRight: 10}}
                icon={{name: 'book', color: 'yellow', type: 'font-awesome'}}
                rounded
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
              />
            <View style={(styles.listContainer, {flex: 1})}>
              <Text style={{fontSize: 12, color: "grey"}}>DRINKS</Text>
              <Text style={{fontSize: 17, marginTop: 3}}>$3296,98 spent</Text>
            </View>
            <SimpleLineIcons name="arrow-right" size={14} color="grey" marginBottom="20" type="entypo" />
          </View>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <View style={{alignItems: "center", justifyContent: "center", marginRight: 15, marginTop: 15, flex: 1, flexDirection: 'row'}}>
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
              <Text style={{fontSize: 12, color: "grey"}}>RENT</Text>
              <Text style={{fontSize: 17, marginTop: 3}}>$3296,98 spent</Text>
            </View>
            <SimpleLineIcons name="arrow-right" size={14} color="grey" marginBottom="20" type="entypo" />
          </View>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
        </View>
      </View>
    </ScrollView>
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
  list: {
    backgroundColor: "#ffffff",
    width: "95%",
    marginTop: "5%",
    flex: 1,
    alignItems: "center",
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
  },
});
