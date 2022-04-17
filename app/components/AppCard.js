import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import AppColors from "../config/AppColors";

function AppCard({ title, subtitle, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryColor,
    // height: 200,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 25,
    marginLeft: 25,
    marginRight: 25,
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    marginLeft: 20,
  },
  subtitle: {
    marginLeft: 20,
  },
});

export default AppCard;
