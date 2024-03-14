import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  Modal,
  Text,
} from "react-native";
import { useQuery } from "@apollo/client";
import { useState } from "react";

import { ListItem } from "./components/ListItem";
import { AddTodoScreen } from "./components/Modal";
import { GET_GAMES } from "./queries/games";

const mockData = [
  {
    title: "Hello",
    message: "World",
    completed: false,
  },
];

export function Home() {
  const [visible, setVisible] = useState(false);

  const { data, loading, error, refetch } = useQuery(GET_GAMES);

  console.log(data?.games);

  const showModal = () => {
    setVisible(true);
  };

  const createTodo = async (title: string, message: string) => {
    setVisible(false);
  };

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>Something went wrong !</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data?.games}
        renderItem={(data) => {
          return <ListItem item={data.item} onPress={() => {}} />;
        }}
      />
      <Pressable style={styles.floatingButton} onPress={showModal} />
      <Modal visible={visible} animationType="slide">
        <AddTodoScreen onPress={createTodo} />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  floatingButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "blue",
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});
