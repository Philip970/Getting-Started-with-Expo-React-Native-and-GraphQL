import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  Modal,
  Text,
} from "react-native";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

import { ListItem } from "./components/ListItem";
import { AddGameScreen } from "./components/Modal";
import { GET_GAMES, UPDATE_GAME } from "./queries/games";
import { CREATE_GAME } from "./mutations/games";
import { AddGameInput, EditGameInput } from "./__generated__/graphql";

export function Home() {
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState();

  const { data, loading, error, refetch } = useQuery(GET_GAMES);
  const [addGame] = useMutation(CREATE_GAME);
  const [updateGame] = useMutation(UPDATE_GAME);

  console.log(data?.games);

  const showModal = (item: any = {}) => {
    setItem(item);
    setVisible(true);
  };

  const saveGame = async (title: string, platforms: string[], id?: string) => {
    if (id) {
      const edits: EditGameInput = {
        title,
        platform: platforms,
      };
      updateGame({
        variables: {
          id,
          edits,
        },
      });
    } else {
      const game: AddGameInput = {
        title,
        platform: platforms,
      };
      addGame({
        variables: {
          game,
        },
      });
    }
    setVisible(false);
    refetch();
  };

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>Something went wrong !</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data?.games}
        renderItem={(data) => {
          return (
            <ListItem
              item={data.item}
              onPress={() => {}}
              onEdit={() => showModal(data.item)}
            />
          );
        }}
      />
      <Pressable style={styles.floatingButton} onPress={showModal} />
      <Modal visible={visible} animationType="slide">
        <AddGameScreen onPress={saveGame} item={item} />
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
