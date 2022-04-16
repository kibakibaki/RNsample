import React, { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";

function TestScreen() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <Switch
        value={isEnabled}
        ios_backgroundColor="#3e3e3e"
        // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        trackColor={{
          false: Platform.OS == "android" ? "#d3d3d3" : "#fbfbfb",
          true: "#81b0ff",
        }}
        onValueChange={(input) => {
          setIsEnabled(input);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default TestScreen;
