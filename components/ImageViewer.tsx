import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

interface Props {
    imageSource: string;
}

export default function ImageViewer({ imageSource }: Props) {
    return (
        <View style={styles.imageContainer}>
            <Image
                source={imageSource}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
})