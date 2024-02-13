import { useRef } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

const MyBottomSheet = () => {
  const sheetRef = useRef(null);

  const renderContent = () => (
    <View style={styles.bottomSheetContent}>
      <Text>Bottom Sheet Content</Text>
    </View>
  );

  return (
    <>
      <Pressable onPress={() => sheetRef.current.snapTo(0)}>
        <Text>여기 눌러라</Text>
      </Pressable>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[0, 300]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
};

export default MyBottomSheet;

const styles = StyleSheet.create({
  bottomSheetContent: {
    backgroundColor: "white",
    padding: 16,
    height: 300,
  },
});
