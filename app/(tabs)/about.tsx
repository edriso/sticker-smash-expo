import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>About Page</Text>
      <Link href="/" style={styles.link}>Home</Link>
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
  text: {
    color: "#fff",
  },
  link: {
    color: "#fff",
    textDecorationLine: "underline",
    marginTop: 10,
  },
});