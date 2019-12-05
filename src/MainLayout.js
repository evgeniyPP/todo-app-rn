import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Navbar from "./components/Navbar";
import MainScreen from "./screens/MainScreen";
import TodoScreen from "./screens/TodoScreen";
import ScreenContext from "./context/screen/screenContext";
import theme from "./theme";

export default () => {
  const { todoId } = useContext(ScreenContext);
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={styles.container}>
        {todoId ? <TodoScreen /> : <MainScreen />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.paddingHorizontal,
    paddingVertical: 20,
    flex: 1
  }
});
