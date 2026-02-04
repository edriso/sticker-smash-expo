import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
// import { Image } from "expo-image";

// const PlaceholderImage = require("../../assets/images/jonny-gios.jpg");
const PlaceholderImage = require("@/assets/images/jonny-gios.jpg");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAppOptions, setShowAppOptions] = useState(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      // console.log("Selected image:", selectedImage); // Appears in the browser console
    } else {
      alert("You did not select any image.");
    }
  }

  return (
    <View
      style={styles.container}
    >
      {/* <View style={{ backgroundColor: "white", padding: 10, borderRadius: 10 }}>
        <Image
          source={PlaceholderImage}
          style={styles.image}
        />
      </View> */}

      <View style={styles.imageContainer}>
        <ImageViewer imageSource={selectedImage ?? PlaceholderImage} />
      </View>

      {showAppOptions ? (
        <View />
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme={"primary"}
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
            theme="secondary"
          />
        </View>

      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});