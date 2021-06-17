import React from "react";
import { View, Text, StyleSheet } from "react-native";

import TabViewExample from "./TabNavigation";

const Message = () => {
  return (
    <View style={styles.screen}>
      <Text>Title</Text>
      <View style={styles.container}>
        <TabViewExample />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "red",
  },
  container: {
    width: 300,
    height: 500,
    backgroundColor: "blue",
    marginTop: 120,
    marginHorizontal: 20,
  },
});

export default Message;
