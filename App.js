import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos(prev => [...prev, todo]);
  };

  const deleteTodo = index => {
    setTodos(prev => prev.filter((todo, currIndex) => currIndex !== index));
  };

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          data={todos}
          renderItem={({ item, index }) => (
            <Todo todo={item} index={index} deleteTodo={deleteTodo} />
          )}
          keyExtractor={(todo, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
