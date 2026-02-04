import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet, Text, View } from "react-native";

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

        <View style={[styles.buttonContainer, theme === "primary" && styles.primaryButtonBorder]}>
            <Pressable
                style={[styles.button, theme === "primary" ? styles.primaryButton : styles.secondaryButton]}
                onPress={onPress}
            >
                <FontAwesome
                    name="picture-o"
                    size={18}
                    color={theme === "primary" ? "#25292e" : "white"}
                />
                <Text style={[styles.buttonLabel, { color: theme === "primary" ? "#25292e" : "#fff" }]}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 8,
    },
    primaryButton: {
        backgroundColor: "#fff",
    },
    primaryButtonBorder: {
        backgroundColor: "#25292e",
        borderWidth: 2,
        borderColor: "#ffd33d",
        borderRadius: 18,
        padding: 4,
    },
    secondaryButton: {
        backgroundColor: "#25292e",
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 16,
    },
});