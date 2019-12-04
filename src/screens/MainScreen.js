import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Image, Dimensions } from "react-native";
import Input from "../components/AddTodo";
import Todo from "../components/Todo";
import theme from "../theme";

const MainScreen = ({ todos, openTodo, addTodo, deleteTodo }) => {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width - theme.paddingHorizontal * 2
  );

  useEffect(() => {
    const update = () => {
      const width =
        Dimensions.get("window").width - theme.paddingHorizontal * 2;
      setDeviceWidth(width);
    };

    Dimensions.addEventListener("change", update);

    return () => {
      Dimensions.removeEventListener("change", update);
    };
  });

  let content = (
    <View style={{ width: deviceWidth, flex: 1 }}>
      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <Todo
            todo={item}
            index={index}
            openTodo={openTodo}
            deleteTodo={deleteTodo}
          />
        )}
        keyExtractor={(todo, index) => index.toString()}
      />
    </View>
  );

  if (!todos.length) {
    content = (
      <View style={css.imageWrap}>
        <Image
          style={css.image}
          source={require("../../assets/no-items.png")}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Input onSubmit={addTodo} />
      {content}
    </View>
  );
};

const css = StyleSheet.create({
  imageWrap: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 300
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});

export default MainScreen;
