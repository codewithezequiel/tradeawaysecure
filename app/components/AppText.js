import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

// the select method returns an object, so i have to spread that object to copy its properties into the text object.
const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: { fontSize: 20, fontFamily: "American Typewriter" },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;
