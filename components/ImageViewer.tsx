import { Image, ImageSource } from "expo-image";
import { StyleSheet } from "react-native";

type Props = {
  placeholderImage: ImageSource;
  selectedImage?: string;
};

export default function ImageViewer({
  placeholderImage,
  selectedImage,
}: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImage;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 16,
  },
});
