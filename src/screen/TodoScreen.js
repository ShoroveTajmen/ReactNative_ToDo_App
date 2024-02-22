import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { IconButton } from "react-native-paper";
import Fallback from "../components/Fallback";

const dummyData = [
  {
    id: "01",
    title: "Wash Car",
  },
  {
    id: "02",
    title: "Read A Book",
  },
];

const TodoScreen = () => {
  //Init local states
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState("");
  const [editTodo, setEditedTodo] = useState(null);

  //Handle Add Todo
  const handleAddTodo = () => {
    //structure of a single todo item
    // {
    //     id :
    //     title:
    // }
    if (todo === "") {
      return; //early return
    }
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  //handle delete todo
  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  //handle edit todo
  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  //handle update todo
  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editTodo.id) {
        return { ...item, title: todo };
      }
      return item;
    });
    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo("");
  };

  //Render Todo
  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#f0f",
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 8,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#1D24CA",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
          elevation: 10,
        }}
      >
        <Text
          style={{ color: "#fff", fontSize: 20, fontWeight: "800", flex: 1 }}
        >
          {item.title}
        </Text>
        <IconButton
          icon="pencil"
          iconColor="#fff"
          onPress={() => handleEditTodo(item)}
        ></IconButton>
        <IconButton
          icon="trash-can"
          iconColor="#fff"
          onPress={() => handleDeleteTodo(item.id)}
        ></IconButton>
      </View>
    );
  };

  return (
    <View style={{ marginHorizontal: 16 }}>
      {/* <Text>TODO APP</Text> */}
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#f0f",
          borderRadius: 6,
          paddingVertical: 12,
          paddingHorizontal: 16,
          marginTop: 100,
        }}
        placeholder="Add a task"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      ></TextInput>
      {editTodo ? (
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            borderRadius: 6,
            paddingVertical: 8,
            marginVertical: 34,
            alignItems: "center",
          }}
          onPress={() => handleUpdateTodo()}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            borderRadius: 6,
            paddingVertical: 8,
            marginVertical: 34,
            alignItems: "center",
          }}
          onPress={() => handleAddTodo()}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Add
          </Text>
        </TouchableOpacity>
      )}

      {/* Render todo List */}
      <FlatList data={todoList} renderItem={renderTodos}></FlatList>

      {todoList.length <= 0 && <Fallback></Fallback>}
    </View>
  );
};

export default TodoScreen;
