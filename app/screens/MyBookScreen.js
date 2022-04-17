import React from "react";
import { StyleSheet, View } from "react-native";

import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import AppText from "../components/welcomeComponents/AppText";
import AppCard from "../components/AppCard";

function MyBookScreen(props) {
  return (
    <AppScreen style={styles.container}>
      <AppCard
        title="众神之父赐于我重伤倒地！"
        subtitle="本书主要介绍如何用瓦尔滋你3点血把狗子滋倒地"
        image={require("../assets/滋崩.jpeg")}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.black,
    flex: 1,
    padding: 20,
  },
});

export default MyBookScreen;
