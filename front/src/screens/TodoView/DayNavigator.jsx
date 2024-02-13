import { StyleSheet, View, Text, Pressable } from "react-native";
import { theme } from "../../colors";
import { useState } from "react";

const DayNavigator = () => {
  const [day, setDay] = useState("today");
  return (
    <View style={styles.navigator}>
      <Pressable onPress={() => setDay("today")}>
        <Text
          style={{
            ...styles.day,
            color:
              day === "today" ? theme.subtitleSelected : theme.titleUnselected,
          }}
        >
          오늘
        </Text>
      </Pressable>
      <Text style={styles.day}>/</Text>
      <Pressable onPress={() => setDay("week")}>
        <Text
          style={{
            ...styles.day,
            color:
              day === "week" ? theme.subtitleSelected : theme.titleUnselected,
          }}
        >
          이번주
        </Text>
      </Pressable>
      <Text style={styles.day}>/</Text>
      <Pressable onPress={() => setDay("month")}>
        <Text
          style={{
            ...styles.day,
            color:
              day === "month" ? theme.subtitleSelected : theme.titleUnselected,
          }}
        >
          이번달
        </Text>
      </Pressable>
    </View>
  );
};

export default DayNavigator;

const styles = StyleSheet.create({
  navigator: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingRight: 150,
  },
  day: {
    fontSize: 14,
    fontFamily: "NanumSquareNeoOTF-Bd",
    color: theme.titleUnselected,
  },
});
