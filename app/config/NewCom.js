import React from "react";

import { Text, StyleSheet } from "react-native";

function NewCom(children) {
  return <Text>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default NewCom;
