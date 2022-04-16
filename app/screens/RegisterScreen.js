import React, { useState } from "react";

import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Formik } from "formik";

import AppTextInput from "../components/LoginScreenComponents/AppTextInput";
import AppScreen from "../components/AppScreen.js";
import AppColors from "../config/AppColors";
import AppText from "../components/welcomeComponents/AppText";
import AppButton from "../components/welcomeComponents/AppButton";

function LoginScreen(props) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <AppScreen prop_from_Screenjs={styles.container}>
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

      <View style={styles.textInputContainer}>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          placeholder="User Name"
          textContentType="username"
          /********************************/
          onChangeText={(userInput) => setUsername(userInput)}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          placeholder="Email Address"
          keyboardType="email-address"
          textContentType="emailAddress"
          /********************************/
          onChangeText={(userInput) => setEmail(userInput)}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          /********************************/
          onChangeText={(userInput) => setPassword(userInput)}
        />
      </View>
      <AppButton
        title="register"
        onPress={() => console.log(username, email, password)}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.米色,
    padding: 50, //does not work
    // flexDirection: "row",
    // borderRadius: 50,
    // marginVertical: 20,
    width: "100%",
  },
  welcomeContainer: {
    // flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  textInputContainer: {
    fontSize: 16,
    marginVertical: 75,
    marginLeft: 20,
    marginRight: 20,
    // backgroundColor: "red",
  },
});

export default LoginScreen;
