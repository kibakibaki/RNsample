import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

/****************************************************************/
import { StyleSheet, View, ImageBackground, Text } from "react-native";

/****************************************************************/
import AppColors from "./app/config/AppColors.js";
import AppText from "./app/components/welcomeComponents/AppText.js";
import AppButton from "./app/components/welcomeComponents/AppButton.js";
import AppScreen from "./app/components/AppScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

/****************************************************************/
//import welcome and login screen
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen.js";
import TestScreen from "./app/screens/TestScreen.js";
import AuthNavigator from "./app/naviagation/AuthNavigator.js";

/****************************************************************/
const blurRadiusValue = Platform.OS === "ios" ? 0.5 : 0.7;
//this is for the background blurring effect

export default function App() {
  return (
    // <View style={styles.container}>
    //   <AppText>hello, world!</AppText>
    //   <AppButton title="Clicked me">hello</AppButton>
    //   <MaterialCommunityIcons
    //     name="library"
    //     size={100}
    //     color={AppColors.black}
    //   />
    //   <StatusBar style="auto" />
    // </View>
    //使用来自其他文件的components做出一个按钮，一个文字
    /****************************************************************/

    // <ImageBackground
    //   source={require("./app/assets/background.jpg")}
    //   blurRadius={blurRadiusValue}
    //   style={styles.background}
    // />
    //this is for the background setting
    /****************************************************************/

    // <SafeAreaView style={{ backgroundColor: "red", flex: 1 }}>
    //   <Text>hello</Text>
    // </SafeAreaView>

    // <Screen prop_from_Screenjs={styles.container}>
    //   <Text>hello</Text>
    // </Screen>

    /****************************************************************
     This below is how to create a WELCOME and LOGIN SCREEN*/

    // <WelcomeScreen />
    // <LoginScreen />
    // <RegisterScreen />
    // <TestScreen />
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
    /****************************************************************/
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: AppColors.米色,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // background: {
  //   flex: 1,
  // },
});
