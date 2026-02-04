import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Props {
    label: string;
    onPress: () => void;
    theme?: "primary" | "secondary";
}

export default function Button({ label, onPress, theme = "primary" }: Props) {
    return (
        // if (theme === "primary") {
        //     return (
        //         <View style={styles.buttonContainer}></View>
        //     )
        // }

        <View style={styles.buttonContainer}>
            <Pressable
                style={[styles.button, theme === "primary" ? styles.primaryButton : styles.secondaryButton]}
                onPress={onPress}
            // onPress={() => alert("You pressed a button.")}
            >
                <FontAwesome
                    name="picture-o"
                    size={18}
                    color={theme === "primary" ? "#25292e" : "white"}
                />
                <Text style={[styles.text, { color: theme === "primary" ? "#25292e" : "#ffd33d" }]}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        padding: 10,
        height: 40,
    },
    button: {
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
        borderRadius: 10,
        width: "100%",
    },
    primaryButton: {
        backgroundColor: "#ffd33d",
    },
    secondaryButton: {
        backgroundColor: "#25292e",
    },
    text: {
        color: "#25292e",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
})