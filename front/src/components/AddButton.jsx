import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { theme } from "../colors";
import { Octicons } from "@expo/vector-icons";
import BottomSheet from "./BottomSheet";
import AddTodoModal from "../screens/TodoView/AddTodoModal";

const AddButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleBottomSheet = () => {
    setIsVisible(!isVisible);
  }

  return (
    <>
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={toggleBottomSheet}>
        <Octicons name="plus" size={26} color={theme.primaryBtnText} />
      </Pressable>
    </View>
    {/* <BottomSheet isVisible={isVisible} onClose={toggleBottomSheet} /> */}
    <AddTodoModal isVisible={isVisible} onClose={toggleBottomSheet}/>
    </>
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
    boxShadow: '0px 3px 4.65px rgba(0, 0, 0, 0.5)',
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,
    elevation: 6,
  },
});
