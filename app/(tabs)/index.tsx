import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { FontAwesome } from "@expo/vector-icons";
import { launchImageLibraryAsync } from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  async function pickImageAsync() {
    let result = await launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImage={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button
          icon={<FontAwesome name="picture-o" size={20} />}
          theme="primary"
          label="Choose a photo"
          onPress={pickImageAsync}
        />
        <Button onPress={() => null} label="Use this photo" />
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
