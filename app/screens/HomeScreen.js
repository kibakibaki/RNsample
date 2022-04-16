import React from "react";
import { View } from "react-native";

function HomeScreen(props) {
  return (
    <View style={styles.welcomeContainer}>
      {/* 1. this doesn't aligned the icon for me to the centre when i put it in <ImageBackground> */}
      <MaterialCommunityIcons
        style={styles.welcomeContainer}
        name="library"
        size={100}
        color={AppColors.otherColor}
      />
      <AppText>Welcome!</AppText>
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
