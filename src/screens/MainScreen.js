import React from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import Input from "../components/AddTodo";
import Todo from "../components/Todo";

const MainScreen = ({ todos, openTodo, addTodo, deleteTodo }) => {
  let content = (
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
    <View>
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
