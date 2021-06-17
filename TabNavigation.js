import * as React from "react";
import { View, useWindowDimensions, SafeAreaView } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={{ width: 300, height: 300, backgroundColor: "#ff4081" }} />
);

const SecondRoute = () => {
  return (
    <SafeAreaView>
      <View style={{ width: 300, height: 300, backgroundColor: "#673ab7" }} />
    </SafeAreaView>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabNavigation() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
