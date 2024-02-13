import { StyleSheet, View, Text, Pressable } from "react-native";
import { theme } from "../colors";
import { Octicons } from "@expo/vector-icons";

const AddButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Octicons name="plus" size={26} color={theme.primaryBtnText} />
      </Pressable>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    right: 40,
  },
  button: {
    backgroundColor: theme.addBtn,
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
