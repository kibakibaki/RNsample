import React from "react";

import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={23} />}

      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    flexDirection: "row",
    borderRadius: 25,
    padding: 10,
    marginVertical: 10,
    width: "100%",
  },
  textInput: {
    fontSize: 20,
    color: "black",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
    marginLeft: 10,
  },
});

export default AppTextInput;
