import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/* -------------------------------- */
import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import AppListItem from "../components/AppListItem";
import AppIcon from "../components/AppIcon";

function HomeScreen(props) {
  return (
    <AppScreen prop_from_Screenjs={styles.container}>
      <View style={styles.welcomeContainer}>
        <MaterialCommunityIcons
          style={styles.welcomeContainer}
          name="library"
          size={100}
          color={AppColors.otherColor}
        />
      </View>

      <View style={styles.profileContainer}>
        <AppListItem
          image={require("../assets/user1.jpg")}
          title={"Kiba Lin"}
          subtitle={"Kiba@gmail.com"}
        />
      </View>

      <AppIcon
        name="book-open-variant"
        size={40}
        iconColor={AppColors.otherColor}
        backgroundColor="white"
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
  profileContainer: {
    justifyContent: "center",
    height: 90,
    width: "90%",
    marginTop: 100,
    borderWidth: 2,
    borderColor: AppColors.secondaryColor,
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default HomeScreen;
