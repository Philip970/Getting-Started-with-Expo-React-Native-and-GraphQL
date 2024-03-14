import { Pressable, Text, TextStyle, View, ViewStyle } from "react-native";

export const ListItem = ({
  item,
  onPress,
  onEdit,
  onDelete,
}: {
  item: any;
  onPress: () => void;
  onEdit: () => void;
  onDelete: () => void;
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

  const rightContainer: ViewStyle = {
    display: "flex",
    flexDirection: "row",
  };

  const editButton: TextStyle = {
    color: "blue",
  };

  const deleteButton: TextStyle = {
    color: "red",
    marginLeft: 16,
  };

  return (
    <View style={containerStyle} onPress={onPress}>
      <View>
        <Text>{title}</Text>
        <Text>{platform?.join(", ")}</Text>
      </View>
      <View style={rightContainer}>
        <Pressable onPress={onEdit}>
          <Text style={editButton}>Edit</Text>
        </Pressable>
        <Pressable onPress={onDelete}>
          <Text style={deleteButton}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};
