import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ffd33d",
                headerStyle: {
                    backgroundColor: "#25292e",
                },
                headerShown: false,
                // headerShadowVisible: false,
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                tabBarStyle: {
                    backgroundColor: "#25292e",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            color={color}
                            size={focused ? 24 : 20}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? "information-circle" : "information-circle-outline"}
                            color={color}
                            size={focused ? 24 : 20}
                        />
                    ),
                    // tabBarInactiveTintColor: "red",
                }} />
        </Tabs>
    );
}
