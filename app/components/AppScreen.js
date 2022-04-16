import React from "react";

import { SafeAreaView, StyleSheet } from "react-native";
// import Constants from "@expo-constants";

function Screen({ children, prop_from_Screenjs }) {
  return (
    <SafeAreaView style={[styles.screen, prop_from_Screenjs]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
});

export default Screen;
