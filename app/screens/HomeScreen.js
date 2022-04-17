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
      {/*This component refers to the logo */}
      <View style={styles.welcomeContainer}>
        <MaterialCommunityIcons
          style={styles.welcomeContainer}
          name="library"
          size={100}
          color={AppColors.otherColor}
        />
      </View>

      {/*this componentdisplays the profile list */}
      <View style={styles.profileContainer}>
        <AppListItem
          image={require("../assets/user1.jpg")}
          title={"Kiba Lin"}
          subtitle={"Kiba@gmail.com"}
        />
      </View>

      <View style={{ alignItems: "center" }}>
        <MaterialCommunityIcons
          name="arrow-down-thick"
          iconColor={AppColors.otherColor}
          size={60}
          backgroundColor="transparent"
        />
      </View>

      <View style={styles.linkContainer}>
        <AppListItem
          title="My Book"
          IconComponent={
            <AppIcon
              name="book-open-variant"
              size={30}
              iconColor={AppColors.otherColor}
              backgroundColor="transparent"
            />
          }
          iconMargin={styles.profileContainer}
        />
        <AppListItem
          title="My Author"
          IconComponent={
            <AppIcon
              name="account"
              size={30}
              iconColor={AppColors.otherColor}
              backgroundColor="transparent"
            />
          }
        />
      </View>
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
    // marginVertical: 100,

    width: "100%",
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  profileContainer: {
    justifyContent: "center",
    width: "90%",
    marginTop: 100,
    borderWidth: 2,
    borderColor: AppColors.secondaryColor,
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  linkContainer: {
    height: 150,
    justifyContent: "space-around",
    backgroundColor: "#f2eadf",
    // borderRadius: 30,
    shadowColor: AppColors.secondaryColor,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 2,
    borderColor: "brown",
  },
});

export default HomeScreen;
