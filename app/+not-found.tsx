import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFound() {
  return (
    <>
    <Stack.Screen options={{ title: "Oops! Not Found" }} />
    <View style={styles.container}>
      <Text style={styles.text}>404 - Page Not Found</Text>
      <Link href="/" style={styles.link}>Home</Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  link: {
    color: "#fff",
    textDecorationLine: "underline",
    marginTop: 10,
  },
});