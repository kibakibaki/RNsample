import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

import AppColors from "../config/AppColors.js";

function AppListItem({ image, title, subtitle, IconComponent, onPress }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="white"
      style={{
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
      }}
    >
      <View style={styles.container}>
        {IconComponent}
        {image && <Image source={image} style={styles.image} />}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.蛋黄,
    borderWidth: 0.4,
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 37,
    marginLeft: 10,
  },
  textContainer: {
    justifyContent: "space-around",
    marginLeft: 20,
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    // marginVertical: 15,
  },
  subtitle: {
    fontSize: 12,
    color: "grey",
  },
});

export default AppListItem;
