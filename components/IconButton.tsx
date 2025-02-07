import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  icon: ReactNode;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, onPress, label }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.iconButton} onPress={onPress}>
        {icon}
        <Text style={styles.iconButtonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 0,
  },
  iconButton: {
    padding: 12,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#124559",
    fontSize: 12,
  },
});
