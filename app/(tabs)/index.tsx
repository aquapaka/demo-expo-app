import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button
          icon={<FontAwesome name="picture-o" size={20} />}
          theme="primary"
          label="Choose a photo"
        />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 8,
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {},
});
