import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos(prev => [...prev, todo]);
  };

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </View>
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
