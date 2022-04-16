import React from "react";

import { StyleSheet, ImageBackground, Platform, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

//import other .js files
import AppScreen from "../components/AppScreen.js";
import AppText from "../components/welcomeComponents/AppText";
import AppColors from "../config/AppColors";
import AppButton from "../components/welcomeComponents/AppButton";

//const variables decleared for the stuffin the fucntio n
const backgroundlocation = require("../assets/background.jpg");
const blurRadiusValue = Platform.OS === "ios" ? 5.5 : 0.7;

function WelcomeScreen({ navigation }) {
  return (
    // 4. no props passing in?
    <AppScreen>
      <ImageBackground
        source={backgroundlocation}
        style={styles.background}
        blurRadius={blurRadiusValue}
      >
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

        <View style={styles.buttonContainer}>
          <AppButton
            title="Login"
            onPress={() => navigation.navigate("Login")}
          />
          <AppButton
            title="Register"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </ImageBackground>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeContainer: {
    // flex: 0.3,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonContainer: {
    // backgroundColor: "red",
    marginTop: 50,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 200,

    // justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    width: "50%",
    // backgroundColor: "red",

    /* 3. the butttons are aligned to the edge without any edge,
    is there any way to leave a bit?*/
  },
});

export default WelcomeScreen;
