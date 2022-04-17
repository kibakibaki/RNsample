import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import AppText from "../components/welcomeComponents/AppText";
import AppCard from "../components/AppCard";
import AppListItem from "../components/AppListItem";

const authors = [
  {
    id: 1,
    name: "滋崩 √",
    image: require("../assets/滋崩.jpeg"),
  },
  {
    id: 2,
    name: "单排 瓦鸡",
    image: require("../assets/user1.jpg"),
  },
];

function MyBookScreen(props) {
  return (
    <AppScreen style={styles.container}>
      <FlatList
        data={authors}
        keyExtractor={(author) => author.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <AppListItem title={item.name} image={item.image} />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.米色,
    flex: 1,
  },
  seperator: {
    marginLeft: 20,
    width: "90%",
    height: 2,
    backgroundColor: AppColors.black,
  },
  item: {
    marginVertical: 10,
  },
});

export default MyBookScreen;
