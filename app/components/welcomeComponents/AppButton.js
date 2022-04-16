import React from "react";

import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

import AppColors from "../../config/AppColors";

function AppButton({ title, color = "primaryColor", onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { backgroundColor: AppColors[color] }]}>
        <Text style={styles.text}> {title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppColors.otherColor,
    //2. whats the different btw adding children and write a background color here?
    borderRadius: 50,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    // width: "70%",
    alignSelf: "center",
  },

  text: {
    color: AppColors.black,
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
