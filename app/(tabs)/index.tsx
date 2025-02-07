import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { launchImageLibraryAsync } from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [isShowingEditButtons, setIsShowingEditButtons] = useState(false);

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
      {isShowingEditButtons ? (
        <View style={styles.editButtonsContainer}>
          <IconButton
            label="Reset"
            icon={<Ionicons name="refresh" size={20} />}
            onPress={() => null}
          />
          <CircleButton
            icon={<Ionicons name="fast-food" size={28} color={"#124559"} />}
            onPress={() => null}
          />
          <IconButton
            label="Save"
            icon={<Ionicons name="download-outline" size={20} />}
            onPress={() => null}
          />
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            icon={<FontAwesome name="picture-o" size={20} />}
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button
            onPress={() => setIsShowingEditButtons(true)}
            label="Use this photo"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eff6e0",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
  },
  imageContainer: {
    flex: 1,
  },
  editButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    padding: 16,
  },
  footerContainer: {},
});
