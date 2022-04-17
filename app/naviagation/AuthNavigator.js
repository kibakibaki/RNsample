import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const AppStack = createStackNavigator();

const AuthNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Login"
      component={LoginScreen}
      options={{ title: "Login! Screen" }}
    />
    <AppStack.Screen name="Register" component={RegisterScreen} />
  </AppStack.Navigator>
);

export default AuthNavigator;
