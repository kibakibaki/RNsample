import React, { useState } from "react";

import { View, StyleSheet, TextInput, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../components/LoginScreenComponents/AppTextInput";
import AppScreen from "../components/AppScreen.js";
import AppColors from "../config/AppColors";
import AppText from "../components/welcomeComponents/AppText";
import AppButton from "../components/welcomeComponents/AppButton";

const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(20).label("Password"),
});

function LoginScreen(props) {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  return (
    // <View style={styles.container}>
    //   <TextInput
    //     placeholder="type your fav GOT character"
    //     secureTextEntry={true}
    //     keyboardType="phone-pad"
    //   />
    //   {/* keyboardType= "phone-pad": only number pad can be utilised in this case */}
    // </View>

    //   <View style={styles.container}>
    //     <AppTextInput icon="email" placeholder="Email Address" />
    //   </View>

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

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={schema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View style={styles.textInputContainer}>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                placeholder="Email Address"
                keyboardType="email-address"
                textContentType="emailAddress"
                /********************************/
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
                // (userInput) => setEmail(userInput)
              />
              {touched.email && (
                <AppText style={styles.error}>{errors.email}</AppText>
              )}
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                /********************************/
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
                // (userInput) => setPassword(userInput)
              />
              {touched.password && (
                <AppText style={{ color: "red", fontSize: 16 }}>
                  {errors.password}
                </AppText>
              )}
            </View>
            <AppButton
              title="login"
              onPress={handleSubmit}
              // console.log(email, password)
            />
          </>
        )}
      </Formik>
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
  error: {
    fontSize: 16,
    color: "red",
  },
});

export default LoginScreen;
