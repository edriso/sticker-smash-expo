import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, View } from "react-native";
// import { Image } from "expo-image";

// const PlaceholderImage = require("../../assets/images/jonny-gios.jpg");
const PlaceholderImage = require("@/assets/images/jonny-gios.jpg");

export default function Index() {
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
      <ImageViewer imageSource={PlaceholderImage} />

      <View style={{ marginTop: 20 }}></View>

      <Button label="Choose a photo" onPress={() => alert("Button pressed")} />
      <Button label="Choose a photo" onPress={() => alert("Button pressed")} theme="secondary" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,

  },
});