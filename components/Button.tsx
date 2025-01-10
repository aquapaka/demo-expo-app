import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  icon?: ReactNode;
  label: string;
  theme?: "primary" | "secondary";
  onPress: () => void;
};

export default function Button({ label, theme, icon, onPress }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[
          styles.button,
          theme === "primary" ? styles.primaryButton : styles.secondaryButton,
        ]}
        onPress={onPress}
      >
        {icon && icon}
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    padding: 4,
  },
  button: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  primaryButton: {
    borderWidth: 2,
    borderColor: "orange",
    backgroundColor: "pink",
  },
  secondaryButton: {
    backgroundColor: "gray",
  },
  buttonLabel: {
    fontSize: 16,
  },
});
