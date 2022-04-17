import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function AppListItem({ image, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 37,
    marginLeft: 10,
  },
  textContainer: {
    marginLeft: 20,
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    marginVertical: 15,
  },
  subtitle: {
    fontSize: 12,
  },
});

export default AppListItem;
