import { ReactNode } from "react";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  icon: ReactNode;
  onPress: () => void;
};

export default function CircleButton({ icon, onPress }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        {icon}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 68,
    height: 68,
    padding: 4,
    backgroundColor: "#124559",
    borderRadius: 100,
  },
  circleButton: {
    width: "100%",
    height: "100%",
    borderRadius: 34,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffe6a7",
  },
});
