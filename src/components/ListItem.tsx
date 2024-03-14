import { Pressable, Text, TextStyle, View, ViewStyle } from "react-native";

export const ListItem = ({
  item,
  onPress,
  onEdit,
}: {
  item: any;
  onPress: () => void;
  onEdit: () => void;
}) => {
  const { title, platform } = item;

  const containerStyle: ViewStyle = {
    height: 75,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    borderBottomWidth: 1,
  };

  const completedStatus: ViewStyle = {
    height: 30,
    width: 30,
    borderRadius: 15,
    // backgroundColor: completed ? "lightblue" : "white",
    borderWidth: 1,
    borderColor: "black",
  };

  const editButton: TextStyle = {
    color: "blue",
  };

  return (
    <View style={containerStyle} onPress={onPress}>
      <View>
        <Text>{title}</Text>
        <Text>{platform?.join(", ")}</Text>
      </View>
      <View>
        <Pressable onPress={onEdit}>
          <Text style={editButton}>Edit</Text>
        </Pressable>
      </View>
    </View>
  );
};
