import React, { useState, useEffect, useContext, useCallback } from "react";
import { StyleSheet, View, FlatList, Image, Dimensions } from "react-native";
import todoContext from "../context/todo/todoContext";
import screenContext from "../context/screen/screenContext";
import Input from "../components/AddTodo";
import Todo from "../components/Todo";
import { AppLoader } from "../components/ui/AppLoader";
import theme from "../theme";

const MainScreen = () => {
  const { todos, loading, addTodo, removeTodo, fetchTodos } = useContext(
    todoContext
  );
  const { changeScreen } = useContext(screenContext);

  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width - theme.paddingHorizontal * 2
  );

  const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);

  useEffect(() => {
    loadTodos();
  }, []);

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

  if (loading) {
    return <AppLoader />;
  }

  let content = (
    <View style={{ width: deviceWidth, flex: 1 }}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Todo
            todo={item.value}
            index={item.id}
            openTodo={changeScreen}
            deleteTodo={removeTodo}
          />
        )}
        keyExtractor={item => item.id}
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
