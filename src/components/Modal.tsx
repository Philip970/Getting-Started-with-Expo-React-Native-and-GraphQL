import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextInput,
  TextStyle,
  Pressable,
} from "react-native";

interface Props {
  item: any;
  onPress: (title: string, platforms: string[], id?: string) => void;
}

export const AddGameScreen = ({ item, onPress }: Props) => {
  const [title, setTitle] = useState("");
  const [platforms, setPlatforms] = useState("");
  const onButtonPressed = () => {
    if (title && platforms) {
      onPress(title, platforms.split(" "), item.id);
    }
  };

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setPlatforms(item.platform.join(" "));
    }
  }, []);
  return (
    <View style={container}>
      <View style={textContainer}>
        <TextInput
          value={title}
          style={textInput}
          placeholder="Title"
          onChangeText={setTitle}
        />
        <TextInput
          value={platforms}
          style={textInput}
          placeholder="Platforms"
          onChangeText={setPlatforms}
        />
      </View>
      <Pressable onPress={onButtonPressed} style={button}>
        <Text>{item ? "Update" : "Create"}</Text>
      </Pressable>
    </View>
  );
};

const container: StyleProp<ViewStyle> = {
  flex: 1,
  paddingHorizontal: 30,
};

const textInput: StyleProp<TextStyle> = {
  height: 40,
  borderBottomWidth: 1,
  marginVertical: 10,
};

const button: StyleProp<ViewStyle> = {
  justifyContent: "center",
  alignItems: "center",
  height: 55,
  backgroundColor: "lightblue",
  marginBottom: 20,
  borderRadius: 10,
};

const textContainer: StyleProp<TextStyle> = {
  flex: 1,
};
